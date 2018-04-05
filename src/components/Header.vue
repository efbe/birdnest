<template>

    <header role="banner">
        <nav class="header-menu">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">The Nest</router-link></li>
                <li><router-link to="/nearby">Things to do nearby</router-link></li>
                <li><router-link to="/contact">Contact us</router-link></li>
            </ul>
        </nav>
    </header>

</template>

<script>
  export default {
    name: 'Header'
  }
</script>
