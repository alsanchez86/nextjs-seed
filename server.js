/**
 * NextJS custom server
 * Contact info: asancpiz@everis.com
 *
 * See for more information: https://nextjs.org/docs/advanced-features/custom-server
 * Basic Nextjs custom server example: https://github.com/zeit/next.js/blob/canary/examples/custom-server/server.js
 * Nextjs custom server with express: https://github.com/zeit/next.js/tree/canary/examples/custom-server-express
 *
 * TODO: Implement SSR Caching: https://github.com/zeit/next.js/blob/canary/examples/ssr-caching/server.js
 * TODO: https://medium.com/@anMagpie/secure-your-local-development-server-with-https-next-js-81ac6b8b3d68
 *
 */

require(`./config/environment/server/server.${process.env.NODE_ENV}`);