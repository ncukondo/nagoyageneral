(function() {

  // 以下ヘッダーメニューを自動的に隠しスクロールで表示する処理の設定
  var menuClass= ".headerMenu";
  var marginTop=200;
  headerMenu();

  // 遅延読み込み用のcss
  var cssDir = "/nagoyageneral/styles/css/";
  var cssTitleAnimation = cssDir + "siteTitlePanelAnimation.css";
  var cssTitleAnimationWaitTime = 1000;

  var scriptLoadDelay = 100;
  var magnificPopupCSS = cssDir + "magnific-popup.css";
  var magnificPopupClass = ".videoClipWrapper_videoClip";
  var magnificPopupBreakPoint = 500;

  $(document).ready(function(){
      timerID = setInterval(function(){
        loadCSS(cssTitleAnimation);
        clearInterval(timerID);
      }, cssTitleAnimationWaitTime);

      timerID2 = setInterval(function(){
        prepareMagnificPopup();
        clearInterval(timerID2);
      }, scriptLoadDelay);
  });

  function prepareMagnificPopup(){
    loadCSS(magnificPopupCSS);
    $(magnificPopupClass).magnificPopup({
      type: 'iframe',
      disableOn: magnificPopupBreakPoint, //ウィンドウ幅がmagnificPopupBreakPoint px以下だったらモーダル表示させずにリンク先へ遷移
      mainClass: 'mfp-fade',
      removalDelay: 200,
      preloader: false,
      fixedContentPos: false
    });
  }
  //cssの遅延読み込み
  function loadCSS(css){
    var style = '<link rel="stylesheet" href="'+css+'">';
    $('head link:last').after(style);
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
