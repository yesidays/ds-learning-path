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
            Debes tener en cuenta que la mayoría del contenido se encuentra en inglés debido a que está más actualizado y completo,
            además que me he enfocado en agregar enlaces que sean gratuitos para que no sea un impedimento para tu estudio.
            Sin embargo hay algunos que son de paga y dependerá de ti evaluar si te conviene hacer o no una inversión económica.
          </p>
        </div>
      </article>
    </div>
    <div class="uk-container uk-container-xsmall">
      <article class="uk-article">
        <h1 class="uk-article-title">Mi plan de acción</h1>
        <div class="article-content link-primary">
          <h5
            id="morbi-varius-in-accumsan-blandit-elit-ligula-velit-luctus-mattis-ante-nulla-nulla"
          >Por si aún no sabes por donde empezar te comparto cuál es mi plan de acción.</h5>
          <p>
            Mi objetivo es estudiar al menos una hora al día durante seis meses, se que parece ser mucho tiempo pero el nivel que deseo alcanzar es alto. Para mantenerme enfocada
            usaré la técnica de Pomodoro y practicaré mi avances de algoritmia en los sitios LeetCode y HackerRank.
          </p>
        </div>
      </article>
    </div>
    <div class="uk-container uk-container-xsmall">
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


