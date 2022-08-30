export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'template-integ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:"stylesheet",
        href:"/assets/css/bootstrap.min.css",
      },
      {
        rel:"stylesheet",
        href:"/assets/css/atlantis.min.css",
      },
      {
        rel:"stylesheet",
        href:"/assets/css/demo.css",
      },
      {
        rel:"stylesheet",
        href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css",
      },
    ],
    script:[
      {
        type:"text/javascript",
        src:"/assets/js/core/jquery.3.2.1.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/core/popper.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/core/bootstrap.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/chart.js/chart.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/chart-circle/circles.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/datatables/datatables.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/jqvmap/jquery.vmap.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/jqvmap/maps/jquery.vmap.world.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/plugin/sweetalert/sweetalert.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/atlantis.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/setting-demo2.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"/assets/js/demo.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js",
        body:true,
      },
      {
        type:"text/javascript",
        src:"https://cdn.ckeditor.com/ckeditor5/35.0.1/classic/ckeditor.js",
        body:true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // proxy: true
    baseURL:"/",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
