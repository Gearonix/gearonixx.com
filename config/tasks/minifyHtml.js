const gulp = require('gulp')
const include = require('gulp-file-include')
const paths = require('./../paths')
const htmlmin = require('gulp-htmlmin')

const minifyHtml = () => {
  return gulp.src(paths.html.src)
      .pipe(include({
        prefix: '@@',
        basepath: 'src/sections'
      }))
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(paths.html.dist))
}


module.exports = minifyHtml
