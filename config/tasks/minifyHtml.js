const gulp = require('gulp')
const include = require('gulp-file-include')
const paths = require('./../paths')
const htmlminify = require('gulp-html-minify')

const minifyHtml = () => {
  return gulp.src(paths.html.src)
      .pipe(include({
        prefix: '@@'
      }))
      .pipe(htmlminify())
      .pipe(gulp.dest(paths.html.dist))
}


module.exports = minifyHtml
