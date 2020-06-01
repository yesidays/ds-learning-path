<template>
  <menu>
    <div class="sidebar-docs uk-position-fixed uk-margin-top">
      <h4>Tabla de contenido</h4>
      <h5>
        <a href="ds-path">Científico de datos</a>
      </h5>
      <ul class="uk-nav uk-nav-default doc-nav">
        <li>
          ...
        </li>
      </ul>
      <h5>
        <a href="ml-path">Aprendizaje automático</a>
      </h5>
      <ul class="uk-nav uk-nav-default doc-nav">
        <li>
          
        </li>
      </ul>
      <h5>
        <a href="stats-path">Probabilidad y estadística</a>
      </h5>
      <ul class="uk-nav uk-nav-default doc-nav">
        <li>
          
        </li>
      </ul>
      <h5>
        <a href="algorithms-path">Algoritmia</a>
      </h5>
      <ul class="uk-nav uk-nav-default doc-nav">
        <li>
          
        </li>
      </ul>
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