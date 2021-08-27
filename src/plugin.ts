import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const seizadiBackendPlugin = createPlugin({
  id: 'seizadi-backend',
  routes: {
    root: rootRouteRef,
  },
});

export const SeizadiBackendPage = seizadiBackendPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
