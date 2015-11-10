var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function() {
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('bundle', ['copy'], function() {
  return browserify({
      entries: 'app/main.jsx',
      debug: false,
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  gulp.src(['app/*.css', 'components/material-design-lite/material.min.css','components/material-design-lite/material.min.js'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['bundle', 'live-server'], function() {
  browserSync.init(null, {
    proxy: 'http://127.0.0.1:7777',
    port: 9001,
  });
});
