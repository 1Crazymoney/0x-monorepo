/*
 * -----------------------------------------------------------------------------
 * Warning: This file is auto-generated by contracts-gen. Don't edit manually.
 * -----------------------------------------------------------------------------
 */
import { ContractArtifact } from 'ethereum-types';

import * as AllowanceTarget from '../test/generated-artifacts/AllowanceTarget.json';
import * as Bootstrap from '../test/generated-artifacts/Bootstrap.json';
import * as FixinCommon from '../test/generated-artifacts/FixinCommon.json';
import * as FlashWallet from '../test/generated-artifacts/FlashWallet.json';
import * as FullMigration from '../test/generated-artifacts/FullMigration.json';
import * as IAllowanceTarget from '../test/generated-artifacts/IAllowanceTarget.json';
import * as IBootstrap from '../test/generated-artifacts/IBootstrap.json';
import * as IERC20Transformer from '../test/generated-artifacts/IERC20Transformer.json';
import * as IFeature from '../test/generated-artifacts/IFeature.json';
import * as IFlashWallet from '../test/generated-artifacts/IFlashWallet.json';
import * as InitialMigration from '../test/generated-artifacts/InitialMigration.json';
import * as IOwnable from '../test/generated-artifacts/IOwnable.json';
import * as ISimpleFunctionRegistry from '../test/generated-artifacts/ISimpleFunctionRegistry.json';
import * as ITestSimpleFunctionRegistryFeature from '../test/generated-artifacts/ITestSimpleFunctionRegistryFeature.json';
import * as ITokenSpender from '../test/generated-artifacts/ITokenSpender.json';
import * as ITransformERC20 from '../test/generated-artifacts/ITransformERC20.json';
import * as LibBootstrap from '../test/generated-artifacts/LibBootstrap.json';
import * as LibCommonRichErrors from '../test/generated-artifacts/LibCommonRichErrors.json';
import * as LibERC20Transformer from '../test/generated-artifacts/LibERC20Transformer.json';
import * as LibMigrate from '../test/generated-artifacts/LibMigrate.json';
import * as LibOwnableRichErrors from '../test/generated-artifacts/LibOwnableRichErrors.json';
import * as LibOwnableStorage from '../test/generated-artifacts/LibOwnableStorage.json';
import * as LibProxyRichErrors from '../test/generated-artifacts/LibProxyRichErrors.json';
import * as LibProxyStorage from '../test/generated-artifacts/LibProxyStorage.json';
import * as LibSimpleFunctionRegistryRichErrors from '../test/generated-artifacts/LibSimpleFunctionRegistryRichErrors.json';
import * as LibSimpleFunctionRegistryStorage from '../test/generated-artifacts/LibSimpleFunctionRegistryStorage.json';
import * as LibSpenderRichErrors from '../test/generated-artifacts/LibSpenderRichErrors.json';
import * as LibStorage from '../test/generated-artifacts/LibStorage.json';
import * as LibTokenSpenderStorage from '../test/generated-artifacts/LibTokenSpenderStorage.json';
import * as LibTransformERC20RichErrors from '../test/generated-artifacts/LibTransformERC20RichErrors.json';
import * as LibTransformERC20Storage from '../test/generated-artifacts/LibTransformERC20Storage.json';
import * as LibWalletRichErrors from '../test/generated-artifacts/LibWalletRichErrors.json';
import * as Ownable from '../test/generated-artifacts/Ownable.json';
import * as SimpleFunctionRegistry from '../test/generated-artifacts/SimpleFunctionRegistry.json';
import * as TestCallTarget from '../test/generated-artifacts/TestCallTarget.json';
import * as TestFullMigration from '../test/generated-artifacts/TestFullMigration.json';
import * as TestInitialMigration from '../test/generated-artifacts/TestInitialMigration.json';
import * as TestMigrator from '../test/generated-artifacts/TestMigrator.json';
import * as TestMintableERC20Token from '../test/generated-artifacts/TestMintableERC20Token.json';
import * as TestMintTokenERC20Transformer from '../test/generated-artifacts/TestMintTokenERC20Transformer.json';
import * as TestSimpleFunctionRegistryFeatureImpl1 from '../test/generated-artifacts/TestSimpleFunctionRegistryFeatureImpl1.json';
import * as TestSimpleFunctionRegistryFeatureImpl2 from '../test/generated-artifacts/TestSimpleFunctionRegistryFeatureImpl2.json';
import * as TestTokenSpender from '../test/generated-artifacts/TestTokenSpender.json';
import * as TestTokenSpenderERC20Token from '../test/generated-artifacts/TestTokenSpenderERC20Token.json';
import * as TestTransformERC20 from '../test/generated-artifacts/TestTransformERC20.json';
import * as TestZeroExFeature from '../test/generated-artifacts/TestZeroExFeature.json';
import * as TokenSpender from '../test/generated-artifacts/TokenSpender.json';
import * as TransformERC20 from '../test/generated-artifacts/TransformERC20.json';
import * as ZeroEx from '../test/generated-artifacts/ZeroEx.json';
export const artifacts = {
    ZeroEx: ZeroEx as ContractArtifact,
    LibCommonRichErrors: LibCommonRichErrors as ContractArtifact,
    LibOwnableRichErrors: LibOwnableRichErrors as ContractArtifact,
    LibProxyRichErrors: LibProxyRichErrors as ContractArtifact,
    LibSimpleFunctionRegistryRichErrors: LibSimpleFunctionRegistryRichErrors as ContractArtifact,
    LibSpenderRichErrors: LibSpenderRichErrors as ContractArtifact,
    LibTransformERC20RichErrors: LibTransformERC20RichErrors as ContractArtifact,
    LibWalletRichErrors: LibWalletRichErrors as ContractArtifact,
    AllowanceTarget: AllowanceTarget as ContractArtifact,
    FlashWallet: FlashWallet as ContractArtifact,
    IAllowanceTarget: IAllowanceTarget as ContractArtifact,
    IFlashWallet: IFlashWallet as ContractArtifact,
    Bootstrap: Bootstrap as ContractArtifact,
    IBootstrap: IBootstrap as ContractArtifact,
    IFeature: IFeature as ContractArtifact,
    IOwnable: IOwnable as ContractArtifact,
    ISimpleFunctionRegistry: ISimpleFunctionRegistry as ContractArtifact,
    ITokenSpender: ITokenSpender as ContractArtifact,
    ITransformERC20: ITransformERC20 as ContractArtifact,
    Ownable: Ownable as ContractArtifact,
    SimpleFunctionRegistry: SimpleFunctionRegistry as ContractArtifact,
    TokenSpender: TokenSpender as ContractArtifact,
    TransformERC20: TransformERC20 as ContractArtifact,
    FixinCommon: FixinCommon as ContractArtifact,
    FullMigration: FullMigration as ContractArtifact,
    InitialMigration: InitialMigration as ContractArtifact,
    LibBootstrap: LibBootstrap as ContractArtifact,
    LibMigrate: LibMigrate as ContractArtifact,
    LibOwnableStorage: LibOwnableStorage as ContractArtifact,
    LibProxyStorage: LibProxyStorage as ContractArtifact,
    LibSimpleFunctionRegistryStorage: LibSimpleFunctionRegistryStorage as ContractArtifact,
    LibStorage: LibStorage as ContractArtifact,
    LibTokenSpenderStorage: LibTokenSpenderStorage as ContractArtifact,
    LibTransformERC20Storage: LibTransformERC20Storage as ContractArtifact,
    IERC20Transformer: IERC20Transformer as ContractArtifact,
    LibERC20Transformer: LibERC20Transformer as ContractArtifact,
    ITestSimpleFunctionRegistryFeature: ITestSimpleFunctionRegistryFeature as ContractArtifact,
    TestCallTarget: TestCallTarget as ContractArtifact,
    TestFullMigration: TestFullMigration as ContractArtifact,
    TestInitialMigration: TestInitialMigration as ContractArtifact,
    TestMigrator: TestMigrator as ContractArtifact,
    TestMintTokenERC20Transformer: TestMintTokenERC20Transformer as ContractArtifact,
    TestMintableERC20Token: TestMintableERC20Token as ContractArtifact,
    TestSimpleFunctionRegistryFeatureImpl1: TestSimpleFunctionRegistryFeatureImpl1 as ContractArtifact,
    TestSimpleFunctionRegistryFeatureImpl2: TestSimpleFunctionRegistryFeatureImpl2 as ContractArtifact,
    TestTokenSpender: TestTokenSpender as ContractArtifact,
    TestTokenSpenderERC20Token: TestTokenSpenderERC20Token as ContractArtifact,
    TestTransformERC20: TestTransformERC20 as ContractArtifact,
    TestZeroExFeature: TestZeroExFeature as ContractArtifact,
};
