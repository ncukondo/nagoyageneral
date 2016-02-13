<?php
  // サイト全体の各種設定項目を集積したファイル
  // 責任者 近藤 ncukondo@gmail.com　
  // 更新
  //   2016/01/24 作成
  $CFG['site_url'] = 'http://www.med.nagoya-u.ac.jp/';
  $CFG_LOCAL['site_url'] = 'http://localhost/nagoyageneral/';
  $CFG['rss_dir'] = 'rss/';
  $CFG['debug'] = false;
  $CFG_LOCAL['debug'] = true;

  $CFG['site_root'] = '/nagoyageneral';
  $CFG_LOCAL['site_root'] = '/nagoyageneral';
  $CFG['styles_dir'] = $CFG['site_root'].'/styles/css';
  $CFG['phplibs_dir'] = $CFG['site_root'].'/phplibs';
  $CFG['javascripts_dir'] = $CFG['site_root'].'/scripts';

  $CFG['Admin']['name'] = "kondo";
  $CFG['Admin']['mail'] = "ncukondo@gmail.com";

	// データベースの設定
  $CFG['DB']['type'] =  'mysql';
  $CFG['DB']['name'] =  'cspace';
  $CFG['DB']['host'] =  'localhost';
  $CFG['DB']['user'] =  'cspace';
  $CFG['DB']['pass'] =  '';


  // デフォルトのクッキー期限
  $CFG['LOGIN']['cookie_expire'] = 60*60*24*30;


?>
