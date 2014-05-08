var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

var paths = {
  styles: ['public/scss/*.scss']
};

gulp.task('scripts', function() {
  gulp.src('public/js/app/*.js')
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/js'));
});

gulp.task('styles', function() {
  return gulp.src('public/scss/style.scss')
      .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        includePaths : ['public/scss']
      }))
      .pipe(gulp.dest('public/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
});
