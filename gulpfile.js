const gulp = require('gulp')
const browserSync = require('browser-sync')
const browserify = require('browserify')
const vueify = require('vueify')
const fs = require('fs')

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: '',
      index: 'index.html'
    }
  })
})

gulp.task('bs-reload', function() {
  browserSync.reload()
})

gulp.task('vueify', function() {
  browserify('./src/main.js')
    .transform(vueify)
    .bundle()
    .pipe(fs.createWriteStream('build/build.js'))
})

gulp.task('default', ['browser-sync', 'vueify'], function() {
  gulp.watch(['./*.html', './build/*.js'], ['bs-reload'])
  gulp.watch(['src/*.js', 'src/**/*.js', 'components/**/*.vue'], ['vueify'])
})
