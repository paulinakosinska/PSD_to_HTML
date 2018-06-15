var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminMozpng = require('imagemin-pngquant');

gulp.task("scss", function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/index.html', browserSync.reload);
  gulp.watch('src/js/script.js', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

gulp.task('images', function () {
  return gulp.src('src/img_raw/**/*.+(png|jpg|svg)')
    .pipe(imagemin([
      imageminMozjpeg({
        quality: 60
      }),
      imageminMozpng({
        quality: 90
      })
    ]))
    .pipe(gulp.dest('dist/img'))
});