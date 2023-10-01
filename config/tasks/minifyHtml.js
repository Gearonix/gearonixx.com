const gulp = require('gulp')
const include = require('gulp-file-include')
const paths = require('./../paths')

const minifyHtml = () => {
  return gulp.src(paths.html.src)
      .pipe(include({
        prefix: '@@'
      }))
      .pipe(gulp.dest(paths.html.dist))
}


module.exports = minifyHtml
