var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../config').webserver;

gulp.task('webserver',function(){
    gulp.src(config.root)
        .pipe(webserver({
            livereload: config.livereload,
            port: config.port,
            fallback: config.index,
            open: config.open,
            path: config.path,
        }));
});
