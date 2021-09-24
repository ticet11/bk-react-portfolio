/* eslint-disable global-require */

// polyfills and vendors

window.global = window;
window.Buffer = window.Buffer || require('buffer').Buffer;

if (!window._babelPolyfill) {
	require('babel-polyfill');
}
