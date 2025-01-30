import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import moduleFederationConfig from './module-federation.config';

const config = {
  ...moduleFederationConfig,
};

export default composePlugins(withNx(), withReact(), withModuleFederation(config, { dts: false }));
