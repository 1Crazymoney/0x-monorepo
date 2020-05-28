import {
    blockchainTests,
    constants,
    expect,
    filterLogsToArguments,
    getRandomInteger,
    getRandomPortion,
    randomAddress,
} from '@0x/contracts-test-utils';
import { AssetProxyId } from '@0x/types';
import { BigNumber, hexUtils } from '@0x/utils';
import { DecodedLogs } from 'ethereum-types';
import * as _ from 'lodash';

import { artifacts } from './artifacts';

import { TestUniswapV2BridgeContract, UniswapV2BridgeERC20BridgeTransferEventArgs, UniswapV2BridgeEvents } from './wrappers';

blockchainTests.resets.only('UniswapV2 unit tests', env => {
    const FROM_TOKEN_DECIMALS = 6;
    const TO_TOKEN_DECIMALS = 18;
    const FROM_TOKEN_BASE = new BigNumber(10).pow(FROM_TOKEN_DECIMALS);
    const TO_TOKEN_BASE = new BigNumber(10).pow(TO_TOKEN_DECIMALS);
    let testContract: TestUniswapV2BridgeContract;

    before(async () => {
        testContract = await TestUniswapV2BridgeContract.deployFrom0xArtifactAsync(
            artifacts.TestUniswapV2Bridge,
            env.provider,
            env.txDefaults,
            artifacts,
        );
    });

    describe('isValidSignature()', () => {
        it('returns success bytes', async () => {
            const LEGACY_WALLET_MAGIC_VALUE = '0xb0671381';
            const result = await testContract
                .isValidSignature(hexUtils.random(), hexUtils.random(_.random(0, 32)))
                .callAsync();
            expect(result).to.eq(LEGACY_WALLET_MAGIC_VALUE);
        });
    });

    describe('bridgeTransferFrom()', () => {
        const fromTokenAddress: string = constants.NULL_ADDRESS;
        const toTokenAddress: string = constants.NULL_ADDRESS;

        interface TransferFromOpts {
            toTokenAddress: string;
            fromTokenAddress: string;
            toAddress: string;
            // Amount to pass into `bridgeTransferFrom()`
            amount: BigNumber;
            // Amount to convert in `trade()`.
            fillAmount: BigNumber;
            // Token balance of the bridge.
            fromTokenBalance: BigNumber;
        }

        interface TransferFromResult {
            opts: TransferFromOpts;
            result: string;
            logs: DecodedLogs;
        }

        function createTransferFromOpts(opts?: Partial<TransferFromOpts>): TransferFromOpts {
            const amount = getRandomInteger(1, TO_TOKEN_BASE.times(100));
            return {
                fromTokenAddress,
                toTokenAddress,
                amount,
                toAddress: randomAddress(),
                fillAmount: getRandomPortion(amount),
                fromTokenBalance: getRandomInteger(1, FROM_TOKEN_BASE.times(100)),
                ...opts,
            };
        }

        async function withdrawToAsync(opts?: Partial<TransferFromOpts>): Promise<TransferFromResult> {
            const _opts = createTransferFromOpts(opts);
            const callData = { value: new BigNumber(_opts.fillAmount) };
            // Create the "from" token and exchange.
            const createFromTokenFn = testContract.createToken(
                _opts.fromTokenAddress,
            );
            [_opts.fromTokenAddress] = await createFromTokenFn.callAsync(callData);
            await createFromTokenFn.awaitTransactionSuccessAsync(callData);

            // Create the "to" token and exchange.
            const createToTokenFn = testContract.createToken(
                _opts.toTokenAddress,
            );
            [_opts.toTokenAddress] = await createToTokenFn.callAsync(callData);
            await createToTokenFn.awaitTransactionSuccessAsync(callData);

            // Call bridgeTransferFrom().
            const bridgeTransferFromFn = testContract.bridgeTransferFrom(
                // Output token
                _opts.toTokenAddress,
                // Random maker address.
                randomAddress(),
                // Recipient address.
                _opts.toAddress,
                // Transfer amount.
                _opts.amount,
                // ABI-encode the input token address as the bridge data.
                hexUtils.leftPad(_opts.fromTokenAddress),
            );
            const result = await bridgeTransferFromFn.callAsync();
            const { logs } = await bridgeTransferFromFn.awaitTransactionSuccessAsync();
            return {
                opts: _opts,
                result,
                logs: (logs as any) as DecodedLogs,
            };
        }

        it('returns magic bytes on success', async () => {
            const { result } = await withdrawToAsync();
            expect(result).to.eq(AssetProxyId.ERC20Bridge);
        });

        it('just transfers tokens to `to` if the same tokens are in play', async () => {
            const { opts, result, logs } = await withdrawToAsync({
                fromTokenAddress,
                toTokenAddress,
            });
            expect(result).to.eq(AssetProxyId.ERC20Bridge);
            const transfers = filterLogsToArguments<UniswapV2BridgeERC20BridgeTransferEventArgs>(logs, UniswapV2BridgeEvents.ERC20BridgeTransfer);
            expect(transfers.length).to.eq(1);
            expect(transfers[0].inputToken).to.eq(fromTokenAddress);
            expect(transfers[0].outputToken).to.eq(toTokenAddress);
            expect(transfers[0].from).to.eq(testContract.address);
            expect(transfers[0].to).to.eq(opts.toAddress);
            expect(transfers[0].inputTokenAmount).to.bignumber.eq(opts.amount);
        });
    });
});