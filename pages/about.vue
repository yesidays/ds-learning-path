<template>
  <div class="uk-section">
    <div class="uk-container uk-container-xsmall">
      <article class="uk-article">
        <h1 class="uk-article-title">Acerca de</h1>
        <div class="article-content link-primary">
          <p>Bienvenido(a)</p>
          <p>
            En este sitio encontrarás un plan de preparación para un
            <strong>Científico de Datos</strong> (CD),
            lo he diseñado considerando diferentes fuentes,
            experiencia profesional, recomendaciones de profesionales del área, mi educación formal e información recopilada de la red.
          </p>
          <p>
            Es importante mencionar que me he inspirado en el repositorio "Google Interview" creado por
            <a
              href="https://github.com/jwasham/coding-interview-university"
              target="_blank"
            >John Washam</a>
            cuyo objetivo fue el de convertirse en un Ing. de software en Amazon.
            A partir de ello mi meta es mejorar mi nivel como CD enfocándome en las exigencias de un rol en una FANG (Facebook, Apple, Netflix y Google),
            aunque un CD es diferente y requiere mayor preparación en análisis de datos, aprendizaje automático y estadística
            también estoy considerado el estudio de algoritmia y pensamiento lógico para crear este plan de carrera.
            También debo mencionarte que usaré el lenguaje de programación Python pero tu puedes enfocarte en algun otro como Java, C# o R que son
            algunos de los más utilizados para el rol de CD.
          </p>
          <p>
            Si encontraste útil este sitio te invito a compartirlo en redes sociales, y si deseas ponerte en contacto conmigo puedes enviarme un tweet a
            <a href="https://www.twitter.com/silvercorp>" target="_blank">@silvercorp</a>
            y visitar mi
            <a href="https://www.youtube.com/user/silvercorp" target="_blank">canal</a> de Youtube
          </p>
        </div>
      </article>
      <article class="uk-article">
        <h1 class="uk-article-title">Consideraciones</h1>
        <div class="article-content link-primary">
          <p>
            Debes tener en cuenta que el contenido se encuentra en inglés debido a que está más actualizado y completo,
            además que me he enfocado en agregar enlaces que son gratuitos para que no sea un impedimento para tu estudio.
          </p>
        </div>
      </article>
      <article class="uk-article">
        <h1 class="uk-article-title">Colaboraciones</h1>
        <div class="article-content link-primary">
          <p>
            Si deseas colaborar puedes crear una bifurcación (fork) del siguiente
            <a href="https://github.com/yesidiaz/ds-learning-path" target="_blank">repositorio</a> y apoyarme
            con mejoras, traducciones y resolución de errores. También puedes dar de alta peticiones y errores en la sección correspondiente en Github, haré
            lo posible por ir resolviendo cada uno.
          </p>
          <p>El objetivo es que entre todos podamos apoyarnos y con tu ayuda será posible tener un proyecto más completo.</p>
        </div>
      </article>
      <br />
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

  head() {
    return {
      title: 'Acerca de',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Acerca de mi'
        }
      ]
    };
  },
  components: {
    Logo
  }
};
</script>


