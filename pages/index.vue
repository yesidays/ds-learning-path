<template>
  <div>
    <div class="uk-section">
      <div class="uk-container">
        <h2 class="uk-h1 uk-text-center">Científico de Datos</h2>
        <p class="uk-text-lead uk-text-center">Disciplinas que debes aprender</p>
        <div
          class="uk-child-width-1-3@m uk-grid-match uk-text-center uk-margin-medium-top"
          data-uk-grid
        >
          <div>
            <div
              class="uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight"
            >
              <a class="uk-position-cover" href="/"></a>
              <span data-uk-icon="icon: pencil; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">Probabilidad y Estadística</h3>
              <!--<p>Get started fast with installation and theme setup instructions</p>-->
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight"
            >
              <a class="uk-position-cover" href="/"></a>
              <span data-uk-icon="icon: settings; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">Aprendizaje Automático</h3>
              <!--<p>Lean about all the theme options, features and how to use them</p>-->
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight"
            >
              <a class="uk-position-cover" href="/"></a>
              <span data-uk-icon="icon: code; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">Algoritmos</h3>
              <!--<p>Get help or tailor the theme to your specific requirements</p>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-section section-videos">
      <div class="uk-container uk-container-small">
        <h2 class="uk-h1 uk-text-center">Videos</h2>
        <p class="uk-text-lead uk-text-center">Contenido para tu preparación</p>
        <div
          class="uk-child-width-1-2@m uk-grid-match uk-text-center uk-margin-medium-top"
          data-uk-grid
          data-uk-lightbox
        >
          <div>
            <div
              class="uk-card uk-card-default uk-box-shadow-small uk-box-shadow-hover-medium uk-card-body uk-inline border-radius-large border-xlight"
            >
              <a
                class="uk-position-cover"
                href="https://www.youtube.com/watch?v=kAn1ze3Oi9w"
                data-caption="Getting Started"
              ></a>
              <span data-uk-icon="icon: play-circle; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">¿Qué es un científico de datos?</h3>
              <p>Entrevista a tacos de datos</p>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-box-shadow-small uk-box-shadow-hover-medium uk-card-body uk-inline border-radius-large border-xlight"
            >
              <a
                class="uk-position-cover"
                href="https://www.youtube.com/watch?v=uNKePJVyR1c"
                data-caption="What is Figma"
              ></a>
              <span data-uk-icon="icon: play-circle; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">10 libros para aprender Machine Learning</h3>
              <p>Recomendación de libros en inglés para aprender machine learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-section uk-text-center">
      <div class="uk-container uk-container-small">
        <div data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
          <h2 class="uk-h1 uk-margin-bottom">¿Tienes dudas?</h2>
          <p class="uk-text-lead uk-text-center">Envíame un correo</p>
          <a
            class="uk-button uk-button-primary uk-button-large uk-margin-medium-top"
            href="mailto:silvercorp@gmail.com"
          >Contáctame</a>
        </div>
      </div>
    </div>
    <div class="uk-section uk-text-center">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="B5B9DGV8R5B4A" />
        <input type="image" src="https://www.paypalobjects.com/en_US/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_MX/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>

  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  layout: "default",
  components: {
    Logo
  }
};
</script>


