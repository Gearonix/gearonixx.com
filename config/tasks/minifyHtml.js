const gulp = require('gulp')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const paths = require('./../paths')

const minifyHtml = () => {
  return gulp.src(`${paths.src}/**.html`)
      .pipe(include({
        prefix: '@@'
      }))
      .pipe(htmlmin({
        collapseWhiteSpace: true
      }))
      .pipe(gulp.dest(paths.dist))
}


module.exports = minifyHtml
