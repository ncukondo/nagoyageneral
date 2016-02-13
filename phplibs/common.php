<?php
/*
 * サイト全体に共通して使われるファイル
 * 責任者 近藤猛 ncukondo@gmail.com
 * 更新
 *  2016/01/24 作成
*/

  $start_time = _getmicrotime(); // デバック用に処理開始時間を取得していく

  ini_set('display_errors',1);
  error_reporting(E_ALL);

  function _getmicrotime(){
      list($usec, $sec) = explode(" ",microtime());
      return ((float)$sec + (float)$usec);
  }

  // サイト全体のルートディレクトリを取得
  $ROOT_DIR = dirname(dirname(__FILE__)) ;
  // phpライブラリのディレクトリ
  $LIB_DIR = $ROOT_DIR.'/phplibs';

  // ローカルでのテスト環境か, windows環境であれがテストとする
  $IS_LOCAL=strtoupper(substr(PHP_OS, 0, 3)) == 'WIN';

  // 設定ファイルを読み込み
  require_once $LIB_DIR.'/config.php';

	if($IS_LOCAL){
		ini_set('include_path',"$ROOT_DIR;$ROOT_DIR/phplibs/smarty/libs;".ini_get('include_path'));
    _overload_local_config();
	}else{
		ini_set('include_path',"$ROOT_DIR:$ROOT_DIR/phplibs/smarty/libs:$ROOT_DIR/lib/PEAR/:.:".ini_get('include_path'));
  }
  // デバッグ中であれば全てのエラーを表示
  if ($CFG['debug']){
    ini_set('display_errors',1);
    error_reporting(E_ALL);
  }

  function _overload_local_config(){
      global $CFG;
      global $CFG_LOCAL;

      foreach($CFG_LOCAL as $key=>$value){
          $CFG[$key] = $value;
      }
  }

?>
