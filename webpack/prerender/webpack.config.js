const path = require('path');
const fs = require('fs');
const request = require('sync-request');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const staticRoutes = require('./routes');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
let routes = [];

try {
  // Get sitemap
  // const res = request('GET', `${process.env.CMS_URL}/sitemap.xml`);
  const res = request('GET', 'https://cms.webdevelop.pro/sitemap.xml');
  const sitemap = res.getBody('utf8');
  // Parse loc
  // const locRegExp = new RegExp(`<loc>${process.env.FRONTEND_URL}(/\\S*)+</loc>`, 'g');
  const locRegExp = new RegExp('<loc>https://webdevelop.pro(/\\S*)+</loc>', 'g');
  let parsed = sitemap.match(locRegExp);
  // Get relative url from loc
  parsed = parsed.map(route => route.match(new RegExp(locRegExp.source))[1]);
  // Filter routes which has nested routes
  routes = parsed.filter(route => route !== '/home' && !parsed.some(r => (
    r !== route && r.includes(route)),
  ));
  // Write parsed routes on disk for move-prerender script
  fs.writeFile(path.resolve('prerender-routes.json'), JSON.stringify(routes, null, 2), 'utf8', () => console.log('routes saved'));
} catch (e) {
  console.log(e);
}

module.exports = {
  entry: path.resolve('webpack/prerender/stub.js'),
  output: {
    path: path.resolve('webpack/prerender'),
    filename: 'builded_stub.js',
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.resolve('dist'),
      outputDir: path.resolve('prerendered'),
      routes: staticRoutes,
      indexPath: path.resolve('dist/i.html'),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
      },
      postProcess(context) {
        let { html } = context;
        // Try to get js hash from file
        const jsHash = html.match(/js\/vendors~app\.(\d|\w{20})\.js/);
        // If has found
        if (jsHash && jsHash[1]) {
          const hash = jsHash[1];
          // Clear js files which added by main app.js file
          const regex = new RegExp(`<script.{1,30}/js/.{1,150}(.${hash})?.js.{0,5}</script>`, 'g');
          html = html.replace(regex, '');
        }
        html = html.replace('window.__prerendered = false', 'window.__prerendered = true');
        Object.assign(context, { html });
        return context;
      },
      renderer: new Renderer({
        injectProperty: '__prerender',
        // renderAfterDocumentEvent: 'render-ready',
        // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
        inject: {},
        maxConcurrentRoutes: 4,
        // skipThirdPartyRequests: true,
        // headless: false,
        // devtools: true,
      }),
    }),
  ],
};
