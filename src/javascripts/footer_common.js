(function() {
  "use strict";

  var cssDir = "/nagoyageneral/styles/css/";
  var scriptsDir = "/nagoyageneral/jscripts/";

  // 以下ヘッダーメニューを自動的に隠しスクロールで表示する処理の設定
  var menuClass= ".headerMenu";
  var marginTop=200;
  headerMenu();

  // 遅延読み込み用のcss
  var cssTitleAnimation = cssDir + "siteTitlePanelAnimation.css";
  var cssTitleAnimationWaitTime = 1000;

  var scriptLoadDelay = 10;
  var magnificPopupCSS = cssDir + "magnific-popup.css";
  var magnificPopupClass = ".videoClipWrapper_videoClip";
  var magnificPopupScript = scriptsDir+"jquery.magnific-popup.min.js";
  var magnificPopupBreakPoint = 500;

  $(document).ready(function(){
      setTimeout(function(){
        loadCSS(cssTitleAnimation);
      }, cssTitleAnimationWaitTime);

      setTimeout(function(){
        loadJQueries();
      }, scriptLoadDelay);
  });

  function loadJQueries(){
    prepareMagnificPopup();
  }

  function prepareMagnificPopup(){
    loadCSS(magnificPopupCSS,function(){
      loadScript(magnificPopupScript, function(){
        $(magnificPopupClass).magnificPopup({
          type: 'iframe',
          disableOn: magnificPopupBreakPoint, //ウィンドウ幅がmagnificPopupBreakPoint px以下だったらモーダル表示させずにリンク先へ遷移
          mainClass: 'mfp-fade',
          removalDelay: 200,
          preloader: false,
          fixedContentPos: false
        });
      });
    });
  }
  //cssの遅延読み込み
  function loadCSS(css, callback){
    var done = false;
    var style = document.createElement('link');
    var head = document.getElementsByTagName('head')[0];
    style.rel = "stylesheet";
    style.href = css;
    if(callback!== undefined){
      style.onload = function(){callback();};
    }
    head.appendChild(style);

  }

  //scriptの遅延読み込み
  function loadScript(src, callback){
    var done = false;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
    if(callback!== undefined){
      script.onload = function(){callback();};
    }
  }


  function headerMenu(){
    var menuHeight = 0;
    var showFlag = true;
    var startPos = 0;
    $(window).scroll(function(){
      var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
        if($(window).scrollTop() >= marginTop & showFlag) {
          menuHeight = $(menuClass).height();
          $(menuClass).css("top", "-" + menuHeight + "px");
          showFlag = false;
        }
      } else if(!showFlag & currentPos < startPos){
        $(menuClass).css("top", 0 + "px");
          showFlag = true;
      }
      startPos = currentPos;
      return false;
    });
  }
})();
