const gulp = require('gulp')
const sync = require('browser-sync').create()
const paths = require('./config/paths')

// tasks
const clear = require('./config/tasks/cleanDist')
const minifyHtml = require('./config/tasks/minifyHtml')
const minifyScss = require('./config/tasks/minifyScss')
const minifyJs = require('./config/tasks/minifyJs')

const build = gulp.series(clear, minifyScss, minifyJs, minifyHtml)

const serve = () => {
  sync.init({
    server: `./${paths.dist}`
  })

  gulp
      .watch(`${paths.src}/**`, build)
      .on('change', sync.reload)
}


gulp.task('default', gulp.series(build, serve))
