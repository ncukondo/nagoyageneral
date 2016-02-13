var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('watch', function () {
    // sass
    watch(config.sass, function () {
        gulp.start(['sass']);
    });
    // stlylus
    watch(config.stylus, function () {
        gulp.start(['stylus']);
    });

});
