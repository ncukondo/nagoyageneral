var gulp = require("gulp");
var Fontmin = require('fontmin');
var config = require('../config').minifyFont;

function minifyFont(text, cb) {
  var fontmin = new Fontmin()
    .src(config.src)
    .use(Fontmin.glyph({text:text}))
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff())
    .use(Fontmin.ttf2svg())
    .dest(config.dest);

  fontmin.run(function (err, files) {
    if (err) {
      throw err;
    }
  });
  cb();
}

gulp.task('minifyFont', function(cb) {
  var buffers = [];

  gulp
    .src(config.subSetChars)
    .on('data', function(file) {
        buffers.push(file.contents);
    })
    .on('end', function() {
        var text = Buffer.concat(buffers).toString('utf-8');
        minifyFont(text, cb);
    });
});
