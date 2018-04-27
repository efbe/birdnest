<template>
  <div class="page-content">

    <h1 class="menu-headline handheld-only">Oh No! Looks like you are lost.</h1>

    <div class="container clear">

      <div class="handheld-textbox handheld-only">
        <p>That's terrible! Here's a map so you can find us anytime!</p>
      </div>

      <div class="row birdie-wrapper map-container">
        <!-- left col -->
        <div class="col large-3 small-12 desktop-only birdie-panel">
          <div class="opaque-inlay">
            <h1>Oh No!<br/>
              Looks like you are lost.</h1>
            <p class="description">
              That's terrible! Here's a map so you can find us anytime!
            </p>
          </div>
        </div>

        <!-- right col -->
        <div class="col large-9 small-12">
          <!-- google map -->
          <iframe class="map-container"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5389.445289351263!2d19.049289294257473!3d47.51479242806677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc08b953e1ad%3A0xada28f926562bf11!2sBudapest%2C+Pozsonyi+%C3%BAt+14%2C+1137!5e0!3m2!1sen!2shu!4v1520249437969"
                  width="100%"
                  height="500"
                  frameborder="0"
                  allowfullscreen="true">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>
