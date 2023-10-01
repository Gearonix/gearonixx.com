const gulp = require('gulp')
const sync = require('browser-sync').create()
const paths = require('./config/paths')

// tasks
const clear = require('./config/tasks/cleanDist')
const minifyHtml = require('./config/tasks/minifyHtml')
const minifyScss = require('./config/tasks/minifyScss')
const minifyJs = require('./config/tasks/minifyJs')
const buildFont = require('./config/tasks/buildFont')
const buildImages = require('./config/tasks/buildImages')
const fs = require('fs')
const { resolve } = require('path')


if (!fs.existsSync(resolve(__dirname, paths.dist))) {
  fs.mkdirSync(resolve(__dirname, paths.dist))
}

const build = gulp.series(clear, minifyScss,
    minifyJs, buildImages, minifyHtml, buildFont)

const serve = () => {
  sync.init({
    server: `./${paths.dist}`,
    open: false,
    notify: false
  })

  gulp
      .watch([`${paths.src}/**`, `${paths.public}/**`], build)
      .on('change', () => setTimeout(sync.reload, 1000))
}


gulp.task('build', build)
gulp.task('default', gulp.series(build, serve))


