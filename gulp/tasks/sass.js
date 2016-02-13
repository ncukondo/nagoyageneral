var gulp = require("gulp");
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var config = require('../config').sass;

//var styleDir = "./styles";

//gulp.task("default", function() {
//    gulp.watch(styleDir+"/sass/**/*.scss",["sass"]);
//});

// スタイルシートの処理
gulp.task('sass', function(){

    gulp.src(config.src+ '/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dest))
    ;
});
