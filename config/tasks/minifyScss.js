const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const concat = require('gulp-concat')
const paths = require('./../paths')
const sass = require('gulp-sass')(require('sass'))
const tildeImporter = require('node-sass-tilde-importer')

const minifyScss = () => {
  return gulp.src([`${paths.src}/scss/globals.scss`,
    `${paths.src}/scss/sections/**`,
    `${paths.src}/scss/media-queries.scss`])
      .pipe(sass({
        importer: tildeImporter
      }))
      .pipe(autoprefixer({ cascade: false }))
      .pipe(csso())
      .pipe(concat('index.css'))
      .pipe(gulp.dest(paths.dist))
}


module.exports = minifyScss
