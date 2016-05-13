var gulp = require('gulp');
var config = require('../config').javascript;
var plumber = require("gulp-plumber");
var rename = require('gulp-rename');

// javascriptの処理
gulp.task('javascript', function() {

	gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});
