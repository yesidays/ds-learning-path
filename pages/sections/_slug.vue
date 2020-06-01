<template>
  <div>
    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" data-uk-grid>
          <div class="sidebar-fixed-width uk-visible@m">
            <Menu />
          </div>

          <div class="uk-width-1-1 uk-width-expand@m">
            <article class="uk-article">
              <h1 class="uk-article-title">{{ post.attributes.title }}</h1>
              <p class="uk-text-lead uk-text-muted">
                {{ post.attributes.excerpt }}
              </p>
              <div
                class="uk-article-meta uk-margin-top uk-margin-medium-bottom uk-flex uk-flex-middle"
              >
                <div>
                  Escrito por
                  <span>
                    <a href="https://www.twitter.com/silvercorp">Yesi Days</a>
                  </span>
                  <br />
                  <time datetime="2020-05-25">{{ post.attributes.date }}</time>
                </div>
              </div>
              <div class="article-content link-primary">
                <div class="content" v-html="post.html" />
              </div>
              <!--<hr class="uk-margin-medium" />
              <div class="uk-margin-large-top paginate-post">
                <div class="uk-child-width-expand@s uk-grid-large" data-uk-grid>
                  <div></div>
                  <div>
                    <h5>Probabilidad y estadística</h5>
                    <div class="uk-text-right">
                      <a
                        class="remove-underline hvr-forward"
                        href="career-path-statistics.html"
                      >Siguiente →</a>
                    </div>
                  </div>
                </div>
              </div>-->
            </article>
          </div>
        </div>
      </div>
    </div>

    <div id="offcanvas-docs" data-uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" data-uk-close></button>
        <h5 class="uk-margin-top">Científico de Datos</h5>
        <ul class="uk-nav uk-nav-default doc-nav">
          <li class="uk-active">
            <a href="doc.html">Template setup</a>
          </li>
          <li>
            <a href="doc.html">Basic theme setup</a>
          </li>
          <li>
            <a href="doc.html">Navigation bar</a>
          </li>
          <li>
            <a href="doc.html">Footer options</a>
          </li>
          <li>
            <a href="doc.html">Creating your first post</a>
          </li>
          <li>
            <a href="doc.html">Creating docs posts</a>
          </li>
          <li>
            <a href="doc.html">Enabling comments</a>
          </li>
          <li>
            <a href="doc.html">Google Analytics</a>
          </li>
        </ul>
        <h5 class="uk-margin-top">Product Features</h5>
        <ul class="uk-nav uk-nav-default doc-nav">
          <li>
            <a href="doc.html">Hero page header</a>
          </li>
          <li>
            <a href="doc.html">Category boxes section</a>
          </li>
          <li>
            <a href="doc.html">Fearured docs section</a>
          </li>
          <li>
            <a href="doc.html">Video lightbox boxes section</a>
          </li>
          <li>
            <a href="doc.html">Frequently asked questions section</a>
          </li>
          <li>
            <a href="doc.html">Team members section</a>
          </li>
          <li>
            <a href="doc.html">Call to action section</a>
          </li>
          <li>
            <a href="doc.html">Creating a changelog</a>
          </li>
          <li>
            <a href="doc.html">Contact form</a>
          </li>
          <li>
            <a href="doc.html">Adding media to post and doc content</a>
          </li>
          <li>
            <a href="doc.html">Adding table of contents to docs</a>
          </li>
          <li>
            <a href="doc.html">Adding alerts to content</a>
          </li>
        </ul>
        <h5 class="uk-margin-top">Customization</h5>
        <ul class="uk-nav uk-nav-default doc-nav">
          <li>
            <a href="doc.html">Translation</a>
          </li>
          <li>
            <a href="doc.html">Customization</a>
          </li>
          <li>
            <a href="doc.html">Development</a>
          </li>
          <li>
            <a href="doc.html">Sources and credits</a>
          </li>
        </ul>
        <h5 class="uk-margin-top">Help</h5>
        <ul class="uk-nav uk-nav-default doc-nav">
          <li>
            <a href="doc.html">Contacting support</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import Menu from '../../components/Menu';
  export default {
    async asyncData({ params }) {
      try {
        const post = await import(`~/content/${params.slug}.md`);
        return {
          post
        };
      } catch (error) {
        return false;
      }
    },
    head() {
      return {
        title: this.post.attributes.title
      };
    },
    components: {
      Menu
    }
  };
</script>


