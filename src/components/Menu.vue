<template>

    <nav class="main-nav">
        <a v-on:click="toggleMenu()" class="fab toggle-menu">
            <span class="hamburger">
                <i></i><i></i><i></i>
            </span>
        </a>
        <ul class="side-menu">
            <li><router-link v-on:click.native="closeMenu()" to="/">Home</router-link></li>
            <li><router-link v-on:click.native="closeMenu()" to="/about">The Nest</router-link></li>
            <li><router-link v-on:click.native="closeMenu()" to="/nearby">Things to do nearby</router-link></li>
            <li><router-link v-on:click.native="closeMenu()" to="/contact">Contact us</router-link></li>
        </ul>
    </nav>

</template>

<script>
  export default {
    name: 'Menu',

    methods: {
      /**
       * Toggles nav and content
       */
      toggleMenu: function () {
        document.body.classList.toggle('nav-open');
      },

      /**
       * Closes the menu and content
       */
      closeMenu: function () {
        document.body.classList.remove('nav-open');
      }
    }
  }
</script>
