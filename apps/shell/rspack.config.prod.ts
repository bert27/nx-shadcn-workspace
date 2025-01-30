import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation, ModuleFederationConfig } from '@nx/rspack/module-federation';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,

  remotes: [['appSecondary', 'http://localhost:4201/']],
};

export default composePlugins(withNx(), withReact(), withModuleFederation(prodConfig, { dts: false }));
