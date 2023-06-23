const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const concat = require('gulp-concat')
const paths = require('./../paths')
const sass = require('gulp-dart-sass')
const cleanCSS = require('gulp-clean-css')


const minifyScss = () => {
  return gulp.src(paths.scss.src)
      .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(cleanCSS({ removeDuplicateRules: true }))
      .pipe(autoprefixer({ cascade: false }))
      .pipe(csso())
      .pipe(concat('index.min.css'))
      .pipe(gulp.dest(paths.scss.dist))
}


module.exports = minifyScss
