<template>
    <div class="page-content">
        <h1 class="menu-headline handheld-only">The Nest</h1>

        <div class="container clear">
            <div class="adaptive-content">
                <h1 class="desktop-only">The Nest</h1>
                <p class="feature-description desktop-only">
                    As a family who really likes to travel we built the nest as blabla... Have a look at our services and barely noticeable but smart ideas.
                </p>

                <!-- The Main room -->
                <article id="main-room">
                    <h2>The Main Room</h2>
                    <p class="feature-description">
                        We raised a couple of kids so... blabla
                    </p>
                    <div class="row">
                        <div class="col large-8 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/02.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/02_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-4 mini-12">
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/apartment/room_06.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/room_06_small.jpg" alt="" />
                                </picture>
                            </div>
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/apartment/room_05.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/room_05_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col large-6 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/room_04.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/room_04_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-6 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/room_02.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/room_02_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col large-6 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/01_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-6 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/room_mood_01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/room_mood_01_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Kitchen -->
                <article id="kitchen">
                    <h2>Kitchen</h2>
                    <p class="feature-description">
                        Full sized kitchen with microwave, washing machine, baby chair, nespresso, etc...
                    </p>
                    <div class="row">
                        <div class="col large-8 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/04.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/04_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-4 mini-12">
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/apartment/kitchen_01.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/kitchen_01_small.jpg" alt="" />
                                </picture>
                            </div>
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/apartment/kitchen_02.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/kitchen_02_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col large-6 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/06.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/06_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-6 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/05.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/05_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Misc -->
                <article id="bathroom">
                    <h2>Cozy details</h2>
                    <p class="feature-description">
                        Blabla
                    </p>
                    <div class="row">
                        <div class="col large-8 mini-12">
                            <div class="image-container">
                                <picture>
                                    <source srcset="/static/images/apartment/room_mood_02.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/room_mood_02_small.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="col large-4 mini-12">
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/apartment/bathroom.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/bathroom_small.jpg" alt="" />
                                </picture>
                            </div>
                            <div class="image-container image-container-small">
                                <picture>
                                    <source srcset="/static/images/apartment/room_07.jpg" media="(min-width: 420px)" />
                                    <img src="/static/images/apartment/room_07_small.jpg" alt="" />
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
