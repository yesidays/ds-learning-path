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


