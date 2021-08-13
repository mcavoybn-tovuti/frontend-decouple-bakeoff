import Vue from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from '@tovuti/tovuti-web-components/loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import '../scss/tovuti-template.scss';


// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)


Vue.config.productionTip = false

// Make Vue ignore custom elements defined outside of Vue
// https://vuejs.org/v2/api/#ignoredElements
// Our components are prefixed with 'tov-'
Vue.config.ignoredElements = [/tov-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
