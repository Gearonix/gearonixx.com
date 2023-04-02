const gulp = require('gulp')
const cleanDist = require('gulp-clean')
const paths = require('./../paths')

const clean = () => {
  return gulp.src(`${paths.dist}/*`)
      .pipe(cleanDist())
}

module.exports = clean
