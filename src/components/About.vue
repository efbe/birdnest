<template>
    <div class="page-content">
        <h1 class="menu-headline handheld-only">The Nest</h1>

        <div class="container clear">
            <div class="adaptive-content">
                <h1 class="desktop-only">The Nest</h1>
                <p class="feature-description desktop-only">
                    As a family who really likes to travel we built the nest as blabla... Have a look at our services and barely noticeable but smart ideas.
                </p>

                <!-- Kitchen -->
                <article id="kitchen">
                    <h2>Kitchen</h2>
                    <p class="feature-description">
                        Full sized kitchen with microwave, washing machine, baby chair, etc...
                    </p>
                    <div class="row">
                        <div class="col large-8 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/01_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-4 mini-12">
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/01_small.jpg" alt="" />
                                </picture>
                            </div>
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/01_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Bathroom -->
                <article id="bathroom">
                    <h2>Bathroom</h2>
                    <p class="feature-description">
                        Washmachine, toilet seat adaptor for the small ones, etc...
                    </p>
                    <div class="row">
                        <div class="col large-8 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/01_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-4 mini-12">
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/01_small.jpg" alt="" />
                                </picture>
                            </div>
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/01_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>
