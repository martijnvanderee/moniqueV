if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/O9RHFqjm887a9ibZ9s4KM/_buildManifest.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/O9RHFqjm887a9ibZ9s4KM/_ssgManifest.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.f503e7ff9b2f6ca6960b.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/framework.6542f6b0bef2e288de74.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/main-1f808a405aadd9381044.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/pages/_app-26dd4bb1ed6f6b6aa385.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/pages/_error-497a0e7f9aeb51433ac2.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/pages/index-afdffb5d7eece4f5b119.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/polyfills-aa54647e89713304033b.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"O9RHFqjm887a9ibZ9s4KM"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/android-icon-192x192-dunplab-manifest-39223.jpeg",revision:"fb7acd7d3f70ce912dc4271adc0bffd3"},{url:"/icons/apple-icon-114x114-dunplab-manifest-39223.jpeg",revision:"ea3bf8ce743538405c7d46850ea92c2c"},{url:"/icons/apple-icon-120x120-dunplab-manifest-39223.jpeg",revision:"06586d0fd10590eac22e6388604c7918"},{url:"/icons/apple-icon-144x144-dunplab-manifest-39223.jpeg",revision:"92dab04d013a87dc4a31ae81266bc9d9"},{url:"/icons/apple-icon-152x152-dunplab-manifest-39223.jpeg",revision:"9e47e2847870178a9ebeadba0c8c7649"},{url:"/icons/apple-icon-180x180-dunplab-manifest-39223.jpeg",revision:"c3c6ce0a47e2fb9c4b25aea837e33a0a"},{url:"/icons/apple-icon-57x57-dunplab-manifest-39223.jpeg",revision:"3118c640948a6081c25e82c4a429bb0c"},{url:"/icons/apple-icon-60x60-dunplab-manifest-39223.jpeg",revision:"2b0de588799597fb239a2c366d02540c"},{url:"/icons/apple-icon-72x72-dunplab-manifest-39223.jpeg",revision:"0e2079283ca650765b3c7e04a757c975"},{url:"/icons/apple-icon-76x76-dunplab-manifest-39223.jpeg",revision:"db65e3b4c8a8fa4ff69a59de48d7f56c"},{url:"/icons/favicon-16x16-dunplab-manifest-39223.jpeg",revision:"ef937542c1a4c27100331036c8548682"},{url:"/icons/favicon-32x32-dunplab-manifest-39223.jpeg",revision:"4c7621b93770e0464b7c325b77684ff5"},{url:"/icons/favicon-96x96-dunplab-manifest-39223.jpeg",revision:"27644891d07aa9ab66d38a3531839cfa"},{url:"/manifest.json",revision:"e7572a27b3a08c3dc9bba679586d17f4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
