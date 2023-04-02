const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const concat = require('gulp-concat')
const paths = require('./../paths')
const sass = require('gulp-sass')(require('sass'))

const minifyScss = () => {
  return gulp.src(`${paths.src}/scss/**.scss`)
      .pipe(sass())
      .pipe(autoprefixer({ cascade: false }))
      .pipe(csso())
      .pipe(concat('index.css'))
      .pipe(gulp.dest(paths.dist))
}


module.exports = minifyScss
