<template>
  <div>
    <Head/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
  import Head from '../components/Head';
  import Footer from '../components/Footer';
  export default {
    script: [
      { src: '../assets/js/custom.js' },
      { src: '../assets/js/uikit.js' },
      { src: '../assets/js/awesomplete.js' }
    ],
    components: { 
      Head,
      Footer
    }
  }
</script>


