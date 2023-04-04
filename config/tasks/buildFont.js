const gulp = require('gulp')
const paths = require('./../paths')

const buildFont = () => {
  return gulp.src(`${paths.src}/assets/font/**`)
      .pipe(gulp.dest(`${paths.dist}/font`))
}

const buildMaterialIcons = () => {
  return gulp.src(['node_modules/material-icons/iconfont/*.woff',
    'node_modules/material-icons/iconfont/*.woff2'])
      .pipe(gulp.dest(`${paths.dist}/material-icons`))
}

module.exports = gulp.series(buildFont, buildMaterialIcons)
