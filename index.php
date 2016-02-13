<?php
  // 入り口ページ
  // 責任者 近藤 ncukondo@gmail.com　
  // 更新
  //   2016/01/24 作成
  require_once 'common.php';
  require_once 'pagebuilder.php';

  $builder = new PageBuilder();
  $builder->display('index.tpl');
?>
