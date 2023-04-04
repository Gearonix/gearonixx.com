const gulp = require('gulp')
const paths = require('./../paths')

const buildImages = () => {
  return gulp.src(`${paths.src}/assets/img/**`)
      .pipe(gulp.dest(`${paths.dist}/img`))
}


module.exports = buildImages
