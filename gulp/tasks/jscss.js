var gulp = require('gulp');
var config = require('../config').jscss;
var plumber = require("gulp-plumber");
var rename = require('gulp-rename');

// javascriptに関連するcssの処理
gulp.task('jscss', function() {

	gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});
