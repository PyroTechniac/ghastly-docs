import Vue from 'vue';
import marked from 'marked';
import VueHighlightJs from 'vue-highlightjs';

import Buefy from 'buefy';

import App from './App.vue';
import router from './router';
import renderer from './renderer';

import UnknownPageComponent from './components/UnknownPage.vue';
Vue.config.productionTip = false;

Vue.component('unknown-page', UnknownPageComponent);

Vue.use(VueHighlightJs);

Vue.use(Buefy, { defaultIconPack: 'fa' });

marked.setOptions({ renderer });

Vue.filter('marked', text => {
  if (!text) text = '**Documentation missing.**';
  else text = text.replace(/<(info|warning|danger)>([\s\S]+)<\/\1>/gi, '<div class="notification is-$1">$2</div>');
  return marked(text);
});

new Vue({
  el: '#app',
  router,
  render(el) {
    return el(App);
  }
});