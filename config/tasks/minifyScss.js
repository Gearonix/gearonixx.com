const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const concat = require('gulp-concat')
const paths = require('./../paths')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')


const minifyScss = () => {
  return gulp.src(paths.scss.src)
      .pipe(sass())
      .pipe(autoprefixer({ cascade: false }))
      .pipe(csso())
      .pipe(concat('index.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.scss.dist))
}


module.exports = minifyScss
