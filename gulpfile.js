const gulp = require('gulp')
const browserSync = require('browser-sync')

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

gulp.task('default', ['browser-sync'], function() {
  gulp.watch("./*.html", ['bs-reload'])
  gulp.watch("./public/javascripts/*.js", ['bs-reload'])
})
