var gulp = require('gulp');
var toc = require( 'remark-toc');
var remark = require('gulp-remark');
var html = require( 'remark-html');
var config = require('../config').markdown;
var rename = require('gulp-rename');


gulp.task('markdown', function(done) {

	gulp.src(config.src)
    .pipe(remark().use(toc).use(html))
		.pipe(rename('test.html'))
    .pipe(gulp.dest(config.dest));

});
