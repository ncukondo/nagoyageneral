var gulp = require('gulp');
var config = require('../config').twig;
var twig = require('gulp-twig');
var plumber = require("gulp-plumber");
var rename = require('gulp-rename');
var prettify = require('gulp-html-prettify')

// テンプレートエンジンによるhtml作成
gulp.task('twig', function() {

	gulp.src(config.src)
		.pipe(plumber())
  .pipe(twig())
		.pipe(prettify({indent_char: ' ', indent_size: 2}))
  .pipe(gulp.dest(config.dest));
});
