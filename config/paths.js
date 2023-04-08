module.exports = {
  src: 'src',
  dist: 'dist',
  public: 'public',
  font: {
    src: 'public/assets/font/**',
    dist: 'dist/_static/font'
  },
  html: {
    src: 'src/**.html',
    dist: 'dist'
  },
  javascript: {
    src: [
      'src/globals/scripts/**.js',
      'src/sections/**/*.js',
      'src/addons/**/*.js'
    ],
    dist: 'dist/_static',
    fileName: 'index.min.js'
  },
  scss: {
    src: [
      'src/globals/scss/globals.scss',
      'src/globals/scss/keyframes.scss',
      'src/addons/**/*.scss',
      'src/sections/**/*.scss',
      'src/globals/scss/media-queries.scss'
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
    src: 'public/assets/img/**',
    dist: 'dist/_static/images'
  },
  favicon: {
    src: 'public/favicon.ico',
    dist: 'dist/_static'
  }
}
