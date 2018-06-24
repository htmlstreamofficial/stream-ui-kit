'use strict';

var gulp    = require('gulp'),
  sass      = require('gulp-sass'),
  rename    = require('gulp-rename'),
  changed   = require('gulp-changed'),
  cssnano   = require('gulp-cssnano');



// --------------------------------------------------
// SASS - Compile Sass files into CSS
// --------------------------------------------------

gulp.task('sass', function () {
  // Theme
  gulp.src([
      './assets/include/scss/**/*.scss',
      '!./assets/include/scss/vendors/bootstrap/',
      '!./assets/include/scss/vendors/bootstrap/**/*.scss'
    ])
    .pipe(changed('./assets/css/'))
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(gulp.dest('./assets/css/'));
});


// Bootstrap SASS to CSS
gulp.task('sass-bootstrap', function() {
  return gulp.src('./assets/include/scss/vendors/bootstrap/**/*.scss')
    .pipe(changed('./assets/vendors/bootstrap/css/'))
    .pipe(sass({outputStyle:'expanded'}))
    .on('error', sass.logError)
    .pipe(gulp.dest('./assets/vendors/bootstrap/css/'))
});


// --------------------------------------------------
// [Gulp Tasks and Watch]
// --------------------------------------------------

// This handles watching and running tasks
gulp.task('watch', function () {
  gulp.watch('./assets/include/scss/**/*.scss', ['sass']);
  gulp.watch('./assets/include/scss/vendors/bootstrap/**/*.scss', ['sass-bootstrap']);
});

// Lets us type "gulp" on the command line and run all of our tasks
gulp.task('default', ['sass', 'sass-bootstrap', 'watch']);


// --------------------------------------------------
// CSS minifier - minifies the below given lists
// --------------------------------------------------

gulp.task('minCSS', function() {
  return gulp.src([
    // Bootstrap
    './assets/vendors/bootstrap/css/bootstrap.css',
  ])
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/vendors/bootstrap/css/'));
});

gulp.task('distMinCSS', ['minCSS']);