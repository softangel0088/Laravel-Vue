const mix = require("laravel-mix");
const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("resources/js/app.js", "public/js")
  .webpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "resources/js/src/"),
        "@themeConfig": path.resolve(__dirname, "resources/js/themeConfig.js"),
        "@core": path.resolve(__dirname, "resources/js/src/@core"),
        "@validations": path.resolve(
          __dirname,
          "resources/js/src/@core/utils/validations/validations.js"
        ),
        "@axios": path.resolve(__dirname, "resources/js/src/libs/axios"),
      },
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        "crypto-browserify": require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: ["node_modules", "resources/js/src/assets"],
                },
              },
            },
          ],
        },
        {
          test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
          use: {
            loader: "file-loader",
            options: {
              name: "images/[path][name].[ext]",
              context:
                "../vuexy-vuejs-bootstrap-vue-template/src/assets/images",
              //   context: 'frontend/src/assets/images'
            },
          },
        },
      ],
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
      ],
      plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
      ],
    },
  })
  .sass("resources/scss/app.scss", "public/css")
  .options({
    postCss: [require("autoprefixer"), require("postcss-rtl")],
  })
  .vue();
mix.copy("resources/scss/loader.css", "public/css");

module.exports = {
  mode: "development",
  module: {},
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
  ],
};

// ------------------------------------------------
// If you are deploying on subdomain/subfolder. Uncomment below code before running 'yarn prod' or 'npm run production' command.
// Please Change below 'publicPath' and 'setResourceRoot' options as per your sub-directory path. We have kept our current live demo options which is deployed in sub-folder.
// ------------------------------------------------

/*
 if (mix.inProduction()) {
   mix.version()
   mix.webpackConfig({
     output: {
       publicPath: '/demo/vuexy-vuejs-laravel-admin-template/demo-1/',
       chunkFilename: 'js/chunks/[name].[chunkhash].js'
     }
   })
   mix.setResourceRoot('/demo/vuexy-vuejs-laravel-admin-template/demo-1/')
 }
 */

// ------------------------------------------------
// If you are deploying on subdomain/subfolder then comment out below code before running 'yarn prod' or 'npm run production' command.
// ------------------------------------------------

mix.webpackConfig({
  output: {
    chunkFilename: "js/chunks/[name].[chunkhash].js",
  },
});
