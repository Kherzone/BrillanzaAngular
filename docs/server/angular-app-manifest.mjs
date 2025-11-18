
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/BrillanzaAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/BrillanzaAngular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 651, hash: 'ab4dbcf8950483f78b162c4b511525166555a1390b90a502b5ae1d53dca987ae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 969, hash: '087feb567fb724a420ed290340f2250458ede53f51f5a4d9cc951db68731fa26', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5593, hash: 'c4b7e4e9905fdaa3b210d490b3b1b9fa7673eb7d6a2e91c2f26015afd163124a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CVMPDVDB.css': {size: 117, hash: 'UJ1Ft6Lwi7Q', text: () => import('./assets-chunks/styles-CVMPDVDB_css.mjs').then(m => m.default)}
  },
};
