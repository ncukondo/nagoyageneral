var path = require('path');

var dest = './dest/'; // 出力先ディレクトリ
var src = './src/';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src); // 後々、つかいます

module.exports = {
  src: src,
  dest: dest,

  // 各タスクごとの設定をこの下に追加していく

  // sass
  sass:{
    src : "./styles/sass",
    dest : "./styles/css",
  },

  // stylus
  stylus:{
    src : "./styles/stylus",
    dest : "./styles/css",
  },

  // markdownテキストの処理
  markdown:{
    src: src + "markdown/**/*.md",
    dest: dest,
  },


  // お気に入り用アイコン作成
  favicon:{
    siteName: "名大総診",
    dest: dest + "favicons/",
    masterPicture : src + "images/favicon/favicon.png",
    htmlSrc: [src + "html/templates/favicon_header.src.html"],
    htmlDest: src + "html/templates/",
    htmlToFavicon: '<%= faviconDir %>',
    htmlDestFileName: "favicon_header.html",
    dataJson:  src + "images/favicon/faviconData.json",
  },

  // iconfont自動作成用
  iconfont:{
    src : ["./icons/svg/*.svg"],
    fontName: 'iconfont',
    formats: ['ttf', 'eot', 'woff', 'svg'],
    dest : "./icons/fonts/",
    htmlDest : "./icons/",
    htmlTemplate : './icons/templates/iconfont.html',
    htmlToCSSPath : './',
    cssDest : "./icons/",
    cssTemplate : './icons/templates/iconfont.css',
    cssClassName : 'icon',
    cssFontPath : './fonts/',
    mixinDest : "./styles/stylus/mixins/",
    mixinTemplate : './icons/templates/_iconfont.styl',
    mixinClassName : 'icon',
    mixinFontPath : '../../icons/fonts/',
  },


  // webserver
  webserver:{
    index : 'index.html',
    port : 8001,
    path : '',
    livereload : true,
    root : '../',
    open : './nagoyageneral/index.html',
  },

  // watch
  watch: {
    sass: './styles/sass/**/*.scss',
    stylus: './styles/stylus/**/*.styl',
  },

  // build
  build:{
    tasks:['sass','stylus'],
  },
  // default
  default:{
    tasks:['build','watch'],
  },
}
