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
              <a class="uk-position-cover" href="doc.html"></a>
              <span data-uk-icon="icon: pencil; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">Probabilidad y Estadística</h3>
              <p>Get started fast with installation and theme setup instructions</p>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight"
            >
              <a class="uk-position-cover" href="doc.html"></a>
              <span data-uk-icon="icon: settings; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">Aprendizaje Automático</h3>
              <p>Lean about all the theme options, features and how to use them</p>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight"
            >
              <a class="uk-position-cover" href="doc.html"></a>
              <span data-uk-icon="icon: code; ratio: 3.4" class></span>
              <h3 class="uk-card-title uk-margin">Algoritmos</h3>
              <p>Get help or tailor the theme to your specific requirements</p>
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

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <h2 class="uk-h1 uk-text-center">Preguntas frecuentes</h2>
        <p class="uk-text-center uk-text-lead">Algunas de las preguntas más frecuentes</p>
        <ul class="uk-margin-medium-top" data-uk-accordion="multiple: true">
          <li>
            <a
              class="uk-accordion-title uk-box-shadow-hover-small"
              href="#"
            >¿Qué es un Científico de Datos?</a>
            <div class="article-content uk-accordion-content link-primary">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditate enim dolorum doloribus quam, commodi pariatur similique eum aspernatur repudiandae debitis nulla consectetur illo nobis tenetur perspiciatis? Accusantium, illum nemo?</p>
              <h4>¿Qué necesito?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rerum sapiente neque minima, fugit dignissimos animi quas eligendi commodi fuga aut ipsum perferendis! Nihil iste soluta rem tenetur non veniam.</p>
              <ul>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores dolore, aperiam cumque nihil recusandae voluptatum alias! Impedit similique consequatur veritatis fuga. Fuga nihil, dolores quo odio pariatur itaque perferendis!</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title uk-box-shadow-hover-small" href="#">Something</a>
            <div class="article-content uk-accordion-content link-primary">
              <p>Something else</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </li>
        </ul>
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


