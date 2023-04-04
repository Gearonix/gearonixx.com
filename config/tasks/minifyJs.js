const gulp = require('gulp')
const concat = require('gulp-concat')
const paths = require('./../paths')

const minifyJs = () => {
  return gulp.src(`${paths.src}/js/**.js`)
      .pipe(concat('index.js'))
      .pipe(gulp.dest(paths.dist))
}

module.exports = minifyJs
