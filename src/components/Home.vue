<template>
    <div class="page-content">

      <h1 class="menu-headline handheld-only">Welcome to the Birdnest!</h1>

      <div class="container clear">
        <div class="row birdie-wrapper">
          <!-- left col -->
          <div class="col large-3 small-12 birdie-panel desktop-only">
            <div class="opaque-inlay">
              <h1>Welcome to the Birdnest!</h1>
              <p class="description">
                Unwind on the balcony of a 130-year-old building in the heart of the Barcelona's oldest district. Enjoy open-plan, loft-style living with neutral decor, open shelving, rustic exposed-beam ceilings, and a kitchen featuring red gloss finishes.
              </p>
            </div>
          </div>

          <!-- right col -->
          <div class="col large-9 small-12">
            <div class="carousel-content clear">
              <carousel
                :perPage="1"
                :autoplay="true"
                :autoplayHoverPause="true">
                <slide>
                  <picture>
                    <source srcset="/static/images/apartment/01.jpg" media="(min-width: 420px)" />
                    <img src="/static/images/apartment/01_small.jpg" alt="Birdnest couch" />
                  </picture>
                </slide>
                <slide>
                  <picture>
                    <source srcset="/static/images/apartment/02.jpg" media="(min-width: 420px)" />
                    <img src="/static/images/apartment/02_small.jpg" alt="Birdnest bed" />
                  </picture>
                </slide>
                <slide>
                  <picture>
                    <source srcset="/static/images/apartment/03.jpg" media="(min-width: 420px)" />
                    <img src="/static/images/apartment/03_small.jpg" alt="Birdnest kids' bed" />
                  </picture>
                </slide>
                <slide>
                  <picture>
                    <source srcset="/static/images/apartment/04.jpg" media="(min-width: 420px)" />
                    <img src="/static/images/apartment/04_small.jpg" alt="Birdnest kitchen" />
                  </picture>
                </slide>
                <slide>
                  <picture>
                    <source srcset="/static/images/apartment/05.jpg" media="(min-width: 420px)" />
                    <img src="/static/images/apartment/05_small.jpg" alt="Birdnest dining table" />
                  </picture>
                </slide>
                <slide>
                  <picture>
                    <source srcset="/static/images/apartment/06.jpg" media="(min-width: 420px)" />
                    <img src="/static/images/apartment/06_small.jpg" alt="Birdnest hallway" />
                  </picture>
                </slide>
              </carousel>
              <div class="nav-panel">
                <router-link to="/about" class="button button-handheld-mini">Take a tour</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="handheld-textbox handheld-only">
          <p>Unwind on the balcony of a 130-year-old building in the heart of the Barcelona's oldest district. Enjoy open-plan, loft-style living with neutral decor, open shelving, rustic exposed-beam ceilings, and a kitchen featuring red gloss finishes.</p>
        </div>
      </div>


  <!-- /.page-content -->
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'Home',

    components: {
      'carousel': Carousel,
      'slide': Slide
    }
  }
</script>
