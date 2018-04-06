# Birdnest

<img src="https://raw.githubusercontent.com/efbe/birdnest/master/design/bird.png" width="24">

> Just a small Single Page Application for an Airbnb apartment based on [Vue.js](https://vuejs.org) with a pinch of [Gulp](https://gulpjs.com/).


## Why?

I was curious about the fuzz around Vue so I decided to build something with it and as we needed a very lightweight page for our Airbnb crib I linked the two things together. I guess that's what people call two birds with one stone

I also wanted to make a small app from scratch that is useful for a real life family with a kid unlike Airbnb's "Experiences".


## Above...

Airbnb's minimal theme seems convenient enough for such a project so I stuck with its colors and shapes. I picked [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) from Google Fonts for `h1` and the good old Raleway for the rest of the typo. The shadows are stolen from Material Design (also from Google).

Because the emphasis is on the images and the whole project follows the mobile-first philosophy I popped in the [Vue carousel](https://github.com/SSENSE/vue-carousel) courtesy of SSENSE.

The bird logo is coming from our wallpaper. I hope the designer won't find out!


## ...and under the hood

It's a simple Webpack-based config with the official Vue-router but there are...


## Some other things worth to mention

I found the demo version of the off-canvas menu somewhere on Codepen and upgraded a little bit so users are able to scroll down. I think it's a nice thing to allow users to scroll. The animation is a bit glitchy when you hit close but think about scrolling deliberately!

The [Scoped component SASS](https://vuejsfeed.com/blog/using-sass-scss-with-vue-js-2) feature of Vue + Webpack is fascinating but I like to keep my styles in one place and organized so my [modular setup](https://github.com/efbe/birdnest/blob/master/src/assets/scss/birdnest.scss) and Gulp tasks are coming from [Suit](https://github.com/efbe/suit). But this time I kept the frame and design layers together 'cause we don't need to over-engineer things do we?

Ah yeah I made a very very small responsive grid "system" (haha) because [bloated framework grids](https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap-grid.css) are just getting ridiculous. No gutters, no unused configurations for handheld devices, just a few columns. It's [less than 60 lines](https://github.com/efbe/birdnest/blob/master/src/assets/scss/essential/_grid.scss) including the header of the file.


## How to setup for development
### Regular npm stuff

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification (goes to "dist" directory)
npm run build
```


### Maintain SASS modules

* To add or modify a module just go to `/src/assets/scss` folder
* Put your file into the proper subfolder according to its type
* Don't forget to include it in the `birdnest.scss` config file like this

```scss
// "birdnest" SCSS app config

// Vars - this has to be the first
@import 'essential/_variables';

@import 'essential/_mixins';
@import '[path to your file]';
```

* To build the CSS file for your local environment just run the Gulp task from your terminal

``` bash
gulp build-sass
```


## Known bugs &amp; TODOs

As always there are some minor bugs that might be fixed eventually. Or not.

> Pictures

  When we finished the refurbishing I'll make some real pictures instead of these ones stolen from Airbnb. Also waiting for Spring so there will be leafs on the trees for the neighborhood highlights.

> Carousel

  Return to first slide after autoplay is finished [already on the request list](https://github.com/SSENSE/vue-carousel/issues/105).

> Off-canvas navigation

  It looks ugly when you close the menu in mobile view. Probably I'll come up with something for that.

  Probably the header and the mobile side-menu should be one component to avoid code redundancy but as long as the latter one's items need an extra click event I'll keep them apart.

> Fixed embed Google map height

  Looks ugly as a frog on different screens but at least desktop and mobile views are fine.

> The SASS Gulp task

  Could use the live reload on file save somehow instead of running the `gulp build-sass` task manually all the time like an animal.
