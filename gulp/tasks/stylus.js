var gulp = require("gulp");
var config = require('../config').stylus;
var stylus = require('gulp-stylus');
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");
var combineMq = require('gulp-combine-mq');

// スタイルシートの処理(stylys)
gulp.task('stylus', function(){

    gulp.src([config.src+ '/**/*.styl', '!'+config.src+ '/**/*.styl'])
    .pipe(plumber())
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(combineMq())
    .pipe(gulp.dest(config.dest))
    ;
});
