<template>
  <div>
    <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <a class="uk-logo" href="index.html">Docs</a>
        <button class="uk-offcanvas-close" type="button" data-uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-top">
          <li class="uk-active">
            <nuxt-link to="/">Inicio</nuxt-link>>
          </li>
          <li>
            <nuxt-link to="/sections/introduction-path">Ruta de aprendizaje</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">Acerca de</nuxt-link>
          </li>
        </ul>
        <div class="uk-margin-top uk-text-center">
          <div data-uk-grid class="uk-child-width-auto uk-grid-small uk-flex-center">
            <div>
              <a
                href="https://twitter.com/silvercorp"
                data-uk-icon="icon: twitter"
                class="uk-icon-link"
                target="_blank"
              ></a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/yesidays/"
                data-uk-icon="icon: facebook"
                class="uk-icon-link"
                target="_blank"
              ></a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/yesidaysb/"
                data-uk-icon="icon: instagram"
                class="uk-icon-link"
                target="_blank"
              ></a>
            </div>
            <div>
              <a
                href="https://youtube.com/user/silvercorp"
                data-uk-icon="icon: youtube"
                class="uk-icon-link"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="uk-section uk-text-center uk-text-muted">
      <div class="uk-container uk-container-small">
        <div>
          <ul class="uk-subnav uk-flex-center">
            <li>
              <nuxt-link to="/">Inicio</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">Acerca de</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/sections/introduction-path">Ruta de preparación</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="uk-margin-medium">
          <div data-uk-grid class="uk-child-width-auto uk-grid-small uk-flex-center">
            <div class="uk-first-column">
              <a
                href="https://twitter.com/silvercorp"
                data-uk-icon="icon: twitter"
                class="uk-icon-link uk-icon"
                target="_blank"
              ></a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/yesidays/"
                data-uk-icon="icon: facebook"
                class="uk-icon-link uk-icon"
                target="_blank"
              ></a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/yesidaysb/"
                data-uk-icon="icon: instagram"
                class="uk-icon-link uk-icon"
                target="_blank"
              ></a>
            </div>
            <div>
              <a
                href="https://youtube.com/user/silvercorp"
                data-uk-icon="icon: youtube"
                class="uk-icon-link uk-icon"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
        <div class="uk-margin-medium uk-text-small copyright link-secondary">DS: Learning Path</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>