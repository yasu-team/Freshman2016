const gulp = require('gulp')
const browserSync = require('browser-sync')
const webpack = require('webpack')

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: "",
      index: "index.html"
    }
  })
})

gulp.task('bs-reload', function () {
  browserSync.reload()
})

gulp.task('webpack', function() {
  gulp.src('./src/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'))
})

gulp.task('default', ['browser-sync'], function() {
  gulp.watch("./*.html", ['bs-reload'])
  gulp.watch("./build/*.js", ['bs-reload', 'webpack'])
  gulp.watch("./src/*.js", ['webpack'])
})
