const path = require('path')
const glob = require('glob')

const markdownPaths = ['blog']

module.exports = {  
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Data scientist: Learning path',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Data Scientist: Learning Path' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  generate: {
    routes: dynamicMarkdownRoutes(),
    fallback: true, // if you want to use '404.html' instead of the default '200.html'
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      config.module.rules.push(
        {
            test: /\.md$/,
            include: path.resolve(__dirname, "content"),
            loader: "frontmatter-markdown-loader",
        }
      );
    }
  }
}

function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'content' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`);
    })
  );
}


