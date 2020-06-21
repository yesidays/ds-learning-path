<template>
  <div>
    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.0/dist/css/uikit.min.css" />

    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.0/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.0/dist/js/uikit-icons.min.js"></script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155311271-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-155311271-1');
    </script>
    <Head/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
  import Head from '../components/Head';
  import Footer from '../components/Footer';
  export default {
    css: [
      {
        src: '../assets/styles/main.css'
      }
    ],
    script: [
      { src: '../assets/js/uikit.js' }
    ],
    components: { 
      Head,
      Footer
    }
  }
</script>


