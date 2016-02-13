<?php
  /* 当サイトで用いるサイトのページを作るための共通処理を行うクラス
   * 責任者 近藤 ncukondo@gmail.com　
   *更新
   *   2016/01/25 作成
   */
   require_once 'common.php'; // common.phpはphp.iniのinclude_pathでパスを通しておく
   require_once 'Smarty.class.php';


   class PageBuilder {

    public $usingJQuery = true;
    private $smarty;

    function __construct(){
      $smarty = $this->smarty = new smarty();
   		global $IS_LOCAL;
      global $ROOT_DIR;
      global $CFG;
      $emptyarray=array();

   		$smarty->template_dir = 'templates';
   		$smarty->compile_dir = 'templates/compiled';
   		$smarty->config_dir = 'templates/configs';
   		$smarty->cache_dir = 'templates/cache';
   		$smarty->use_sub_dirs = false;

   		$smarty->caching = false;
   		$smarty->assign('IS_LOCAL',$IS_LOCAL);
      $smarty->assign('ROOT_DIR',$ROOT_DIR);
      $smarty->assign('CFG',$CFG);
      $smarty->assign('STYLES_DIR',$CFG['styles_dir']);
      $smarty->assign('JAVASCRIPTS_DIR',$CFG['javascripts_dir']);
      $smarty->assign('additionalstyles',$emptyarray);
      $smarty->assign('additionaljavascripts',$emptyarray);
      $smarty->assign('additionalfooterjavascripts',$emptyarray);
    }
    private function _prepare(){
      $this->smarty->assign('usingJQuery',$this->usingJQuery);
    }


    public function display($template){
      $this->_prepare();
      return $this->smarty->display($template);
    }


   }

?>
