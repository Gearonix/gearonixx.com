const gulp = require('gulp')
const concat = require('gulp-concat')
const paths = require('./../paths')

const js = () => {
  return gulp.src(`${paths.src}/**.js`)
      .pipe(concat('index.js'))
      .pipe(gulp.dest(paths.dist))
}

module.exports = js
