import Vue from 'vue';
import Router from 'vue-router';

// Lazy loading components
// see: https://router.vuejs.org/en/advanced/lazy-loading.html
const Home  = ()   => import('@/components/Home');
const About = ()   => import('@/components/About');
const Contact = () => import('@/components/Contact');
const Nearby = ()  => import('@/components/Nearby');

Vue.use(Router)

export default new Router({
  mode: 'history', // remove '#' from the url

  // list routes here
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/nearby', component: Nearby }
  ]
})
