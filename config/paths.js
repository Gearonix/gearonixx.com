module.exports = {
  src: 'src',
  dist: 'dist',
  font: {
    src: 'src/assets/font/**',
    dist: 'dist/_static/font'
  },
  html: {
    src: 'src/**.html',
    dist: 'dist'
  },
  javascript: {
    src: [
      'src/js/dom.js',
      'src/js/init-scrollbar.js',
      'src/js/sections/**.js',
      'src/js/effects/**.js'
    ],
    dist: 'dist/_static',
    fileName: 'index.min.js'
  },
  scss: {
    src: [
      'src/scss/globals.scss',
      'src/scss/keyframes.scss',
      'src/scss/addons/**',
      'src/scss/sections/**',
      'src/scss/media-queries.scss'
    ],
    fileName: 'index.min.css',
    dist: 'dist/_static'
  },
  nodeModules: {
    src: [
      'node_modules/smooth-scrollbar/dist/smooth-scrollbar.js'
    ],
    dist: 'dist/_static/lib'
  },
  images: {
    src: 'src/assets/img/**',
    dist: 'dist/_static/images'
  },
  favicon: {
    src: 'src/favicon.ico',
    dist: 'dist/_static'
  }
}
