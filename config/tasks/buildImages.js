const gulp = require('gulp')
const paths = require('./../paths')
const imagemin = require('gulp-imagemin')

const buildImages = () => {
  return gulp.src(paths.images.src)
      .pipe(imagemin())
      .pipe(gulp.dest(paths.images.dist))
}

const buildFavicon = () => {
  return gulp.src(paths.favicon.src)
      .pipe(gulp.dest(paths.favicon.dist))
}


module.exports = gulp.series(buildImages, buildFavicon)
