var gulp = require("gulp");
var config = require('../config').iconfont;
var async = require('async');
var iconfont = require("gulp-iconfont");
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now()/1000);

gulp.task('iconfont', function(done){

  var iconStream = gulp.src(config.src)
    .pipe(iconfont({
      fontName: config.fontName, // required
      appendUnicode: false, // recommended option
      normalize: true,
      formats: config.formats, // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }));
    async.parallel([
      function handleGlyphs (cb) {
        iconStream.on('glyphs', function(glyphs, options) {

          // アイコン使用のためのcssファイル自動作成
          gulp.src(config.cssTemplate)
            .pipe(consolidate('lodash', {
              glyphs: glyphs,
              fontName: config.fontName,
              fontPath: config.cssFontPath,
              className: config.cssClassName,
              templateDir: config.cssTemplate,
            }))
            .pipe(gulp.dest(config.cssDest));

            // stylus用のmixinファイル自動作成
            gulp.src(config.mixinTemplate)
              .pipe(consolidate('lodash', {
                glyphs: glyphs,
                fontName: config.fontName,
                fontPath: config.mixinFontPath,
                className: config.mixinClassName,
                templateDir: config.mixinTemplate,
              }))
              .pipe(gulp.dest(config.mixinDest));

            // フォント一覧 HTML
            gulp.src( config.htmlTemplate)
                      .pipe( consolidate( 'lodash',
                        {
                          glyphs: glyphs,
                          fontName: config.fontName,
                          fontPath: config.cssFontPath,
                          className: config.cssClassName,
                          cssPath: config.htmlToCSSPath,
                        } ) )
                      .pipe( gulp.dest( config.htmlDest ) )
            .on('finish', cb);
            console.log('You can see all icons >  '+config.htmlDest);
        });
      },
      function handleFonts (cb) {
        iconStream
          .pipe(gulp.dest(config.dest))
          .on('finish', cb);
      }
    ], done);

});
