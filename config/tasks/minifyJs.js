const gulp = require('gulp')
const concat = require('gulp-concat')
const paths = require('./../paths')

const minifyJs = () => {
  return gulp.src([`${paths.src}/js/init-scrollbar.js`, `${paths.src}/js/**.js`])
      .pipe(concat('index.js'))
      .pipe(gulp.dest(paths.dist))
}

const buildNodeModules = () => {
  return gulp.src(
      ['node_modules/smooth-scrollbar/dist/smooth-scrollbar.js'])
      .pipe(gulp.dest('dist'))
}


module.exports = gulp.series(buildNodeModules, minifyJs)
