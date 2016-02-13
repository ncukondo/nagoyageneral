<?php
  /* 当サイトで用いるsmartyの共通カスタマイズ項目を定義したmysmartyクラスを定義
   * 責任者 近藤 ncukondo@gmail.com　
   *更新
   *   2016/01/24 作成
   */
   require_once '/phplibs/smarty/libs/Smarty.class.php';
   require_once '/phplibs/common.php';


   class MySmarty extends Smarty {

    public $usingJQuery = true;

    function __construct(){

      parent::__construct();
   		global $IS_LOCAL;
      global $ROOT_DIR;

   		$this->template_dir = 'templates';
   		$this->compile_dir = 'templates/compiled';
   		$this->config_dir = 'templates/configs';
   		$this->cache_dir = 'templates/cache';
   		$this->use_sub_dirs = false;

   		$this->caching = true;
   		$this->assign('IS_LOCAL',$IS_LOCAL);
      $this->assign('ROOT_DIR',$ROOT_DIR);
      $this->assign('CFG',$CFG);

    }



   }

?>
