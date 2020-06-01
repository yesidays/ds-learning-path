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
                  <nuxt-link to="/sections/ds-path">Ruta de preparación</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/changelog">Control de cambios</nuxt-link>
                </li>
              </ul>
            </div>
            <!--<div class="uk-navbar-right">
              <ul class="uk-navbar-nav uk-visible@m">
                <li>
                  <div class="uk-navbar-item">
                    <nuxt-link class="uk-button uk-button-primary-outline" to="/es/path">ES</nuxt-link>
                    |
                    <nuxt-link class="uk-button uk-button-primary-outline" to="/en/path">EN</nuxt-link>
                  </div>
                </li>
              </ul>
              <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle>
                <span data-uk-navbar-toggle-icon></span>
                <span class="uk-margin-small-left">Menu</span>
              </a>
            </div>-->
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
  </header>
</template>

<script>
export default {
  name: "Head"
};
</script>