var gulp = require("gulp");
var config = require('../config').stylus;
var stylus = require('gulp-stylus');
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");
var combineMq = require('gulp-combine-mq');
var postcss = require('gulp-postcss');

// スタイルシートの処理(stylys)
gulp.task('stylus', function(){
    //console.log(config.src+ ' > '+config.dest);
  gulp.src([config.src])
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss([ require('postcss-flexibility') ]))
    .pipe(autoprefixer())
    .pipe(combineMq())
    .pipe(gulp.dest(config.dest))
    ;
});
