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
    src : src + "stylus/**/*.styl",
    dest : dest + "css/",
  },

  //twigテンプレートエンジン
  twig:{
    src: src + "twig/**/!(_)*.twig",
    dest : dest,
  },

  // javascript
  javascript:{
    src: src + "javascripts/**/!(_)*.js",
    dest : dest + "js/",
  },

  // markdownテキストの処理
  markdown:{
    src: src + "markdown/**/*.md",
    dest: dest,
  },

  // フォントのサブセット化
  minifyFont:{
    src: src + "webfont/src/*.ttf",
    dest: dest +"webfont/",
    subSetChars:  src + "webfont/subset.txt"
  },


  // お気に入り用アイコン作成
  favicon:{
    siteName: "名大総診",
    dest: dest + "favicons/",
    masterPicture : src + "favicon/favicon.png",
    htmlSrc: [src + "favicon/_faviconHeader.html"],
    htmlDest: src + "twig/modules/",
    htmlToFavicon: '{% block faviconDir %}{{ pathToTop }}favicons{% endblock faviconDir %}',
    htmlDestFileName: "_faviconHeader.twig",
    dataJson:  src + "favicon/faviconData.json",
    themeColor: "#05401d",
  },

  // iconfont自動作成用
  iconfont:{
    src : [ src+"iconfont/svg/*.svg"],
    fontName: 'iconfont',
    formats: ['ttf', 'eot', 'woff', 'svg'],
    dest : dest + "icons/fonts/",
    htmlDest : src+"iconfont/",
    htmlTemplate : src+'iconfont/templates/iconfont.html',
    htmlToCSSPath : './',
    cssDest : src+"iconfont/",
    cssTemplate : src+'iconfont/templates/iconfont.css',
    cssClassName : 'icon',
    cssFontPath : './fonts/',
    mixinDest : src + "stylus/mixins/",
    mixinTemplate : src+'iconfont/templates/_iconfont.styl',
    mixinClassName : 'icon',
    mixinFontPath : '{$dirIconFont}/',
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
    stylus: src + 'stylus/**/*.styl',
    javascript: src + 'javascripts/**/*.js',
    twig: src + 'twig/**/*.twig',
  },

  // build
  build:{
    tasks:['sass','stylus','twig'],
  },
  // default
  default:{
    tasks:['build','watch'],
  },
}
