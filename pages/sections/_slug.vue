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
              <p class="uk-text-muted">
                {{ post.attributes.excerpt }}
              </p>
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


