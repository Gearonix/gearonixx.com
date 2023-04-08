const gulp = require('gulp')
const paths = require('./../paths')

const buildFont = () => {
  return gulp.src(paths.font.src)
      .pipe(gulp.dest(paths.font.dist))
}


module.exports = buildFont
