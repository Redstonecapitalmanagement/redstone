var gulp = require('gulp');
var harp = require('harp');
var del = require('del');
var ghPages = require('gulp-gh-pages');
var cp = require('child_process');
var clean = require('gulp-rimraf');

/**
 * Serve the Harp Site
 */
gulp.task('serve', function() {
  harp.server(__dirname + '/src', {
    port: 9000
  }, function() {});
});

gulp.task('clean', function() {
  del(['dist'])
});

gulp.task('build', ['clean'], function(done) {
  cp.exec('harp compile src dist', {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('deploy', ['build'], function() {
  return gulp.src("./dist/**/*")
    .pipe(ghPages({
      force: true,
      branch: 'gh-pages'
    }));
});

gulp.task('default', ['serve']);