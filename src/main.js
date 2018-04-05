import Vue from 'vue';
import App from './App';
import router from './router';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel)

// Init Vue instance
new Vue({
  el: '#birdnest',
  router: router,
  components: {
    App
  },
  template: '<App/>'
})

// CSS inclusion comes here
require('./assets/css/birdnest.css')
