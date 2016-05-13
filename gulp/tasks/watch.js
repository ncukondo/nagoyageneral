var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('watch', function () {
  keys = [];
  srcs = [];
  for(key in config){
    keys.push(key);
    srcs.push(config[key]);
    gulp.watch(config[key], [key]);
    console.log('watch: '+key+' : '+config[key]);
  }
});
