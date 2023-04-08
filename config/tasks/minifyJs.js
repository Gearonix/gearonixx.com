const gulp = require('gulp')
const concat = require('gulp-concat')
const paths = require('./../paths')
const minify = require('gulp-minify')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')

const minifyJs = () => {
  return gulp.src(paths.javascript.src)
      .pipe(plumber())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(minify({
        noSource: true
      }))
      .pipe(concat(paths.javascript.fileName))
      .pipe(gulp.dest(paths.javascript.dist))
}

const buildNodeModules = () => {
  return gulp.src(paths.nodeModules.src)
      .pipe(gulp.dest(paths.nodeModules.dist))
}


module.exports = gulp.series(buildNodeModules, minifyJs)
