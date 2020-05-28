<template>
  <header>
    <div
      data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200"
    >
      <nav class="uk-navbar-container">
        <div class="uk-container">
          <div data-uk-navbar>
            <div class="uk-navbar-left">
              <a class="uk-navbar-item uk-logo uk-visible@m" href="index.html">DS</a>
              <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas-docs" data-uk-toggle>
                <span data-uk-navbar-toggle-icon></span>
                <span class="uk-margin-small-left">Ruta</span>
              </a>
              <ul class="uk-navbar-nav uk-visible@m">
                <li class="uk-active">
                  <nuxt-link to="/">Inicio</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/path">Ruta de preparación</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/changelog">Control de cambios</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="uk-navbar-center uk-hidden@m">
              <nuxt-link to="/">Científico de datos</nuxt-link>
            </div>
            <div class="uk-navbar-right">
              <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle>
                <span data-uk-navbar-toggle-icon></span>
                <span class="uk-margin-small-left">Menu</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div
      class="uk-section section-hero uk-position-relative"
      data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true"
    >
      <div class="uk-container uk-container-small">
        <!--<p class="hero-image uk-text-center">
          <img src="images/success.jpg" alt="Hero" />
        </p>-->
        <h4 class="uk-heading-medium uk-text-center uk-margin-remove-top">Ruta de preparación</h4>
      </div>
    </div>
  </header>
</template>

<script>
  
  export default {
    name: 'Head'
  };

</script>