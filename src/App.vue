<template>
  <div id="app" class="birdnest">
    <!-- logo -->
    <router-link v-on:click.native="closeMenu()" class="fab home-button" to="/">
      <span class="birdnest-logo"></span>
    </router-link>

    <!-- nav components -->
    <app-header></app-header>
    <app-menu></app-menu>

    <!-- page components -->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view id="page-view"></router-view>
      </keep-alive>
    </transition>

    <app-footer></app-footer>

  </div>
  <!-- /#app -->
</template>

<script>
  // import components
  const Header = () => import('@/components/Header');
  const Menu   = () => import('@/components/Menu');
  const Footer = () => import('@/components/Footer');

  export default {
    name: 'App',

    components: {
      'app-header': Header,
      'app-menu': Menu,
      'app-footer': Footer
    },

    methods: {
      /**
       * Closes the menu and content
       */
      closeMenu: function () {
        document.body.classList.remove('nav-open');
      }
    }
  }
</script>
