<template>
  <menu>
    <div class="sidebar-docs uk-position-fixed uk-margin-top">
      <h4>Tabla de contenido</h4>
      <h5>
        <a href="introduction-path">Introducción</a>
      </h5>
      <h5>
        <a href="ds-path">Ciencia de datos</a>
      </h5>
      <h5>
        <a href="stats-path">Probabilidad y estadística</a>
      </h5>
      <h5>
        <a href="ml-path">Aprendizaje automático</a>
      </h5>
      <h5>
        <a href="algorithms-path">Algoritmia</a>
      </h5>
    </div>
    
  </menu>
</template>

<script>
export default {
  async asyncData () {
    const context = await require.context('~/content', true, /\.md$/)
    const posts = await context.keys().map(key => ({
      ...context(key),
      path: `/sections/${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  }
}
</script>