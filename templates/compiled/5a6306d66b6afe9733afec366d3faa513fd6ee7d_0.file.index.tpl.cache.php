<?php
/* Smarty version 3.1.29, created on 2016-01-25 09:59:12
  from "C:\Dropbox\Sites\nagoyageneral\templates\index.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_56a5f1f0cb45f7_24673814',
  'file_dependency' => 
  array (
    '5a6306d66b6afe9733afec366d3faa513fd6ee7d' => 
    array (
      0 => 'C:\\Dropbox\\Sites\\nagoyageneral\\templates\\index.tpl',
      1 => 1453715949,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_56a5f1f0cb45f7_24673814 ($_smarty_tpl) {
$_smarty_tpl->compiled->nocache_hash = '2524456a5f1f0c4cff0_76106657';
?>

<?php $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, $_smarty_tpl->cache_lifetime, array('title'=>'名古屋大学医学部附属病院総合診療科'), 0, false);
?>

<div class="menu_wrapper">
  <button class="hamburger_icon">
      <span class="hamburger_layer">メニュー</span>
  </button>
  <h1>ハンバーガーでスライドするメニュー</h1>
  <div class="menu menu-off">
    <ul>
      <li><a href="#sub1">news1<?php echo $_smarty_tpl->tpl_vars['STYLE_DIR']->value;?>
</a></li>
      <li><a href="#sub2">news2</a></li>
      <li><a href="#sub3">news3</a></li>
      <li><a href="#sub4">news4</a></li>
    </ul>
    <h1>内容も入れられる</h1>
    <p>スライドする横メニュー</p>
    <a href="http://codepen.io/swirlycheetah/pen/cFtzb">参考サイト</a>
  </div>
</div>
<?php $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
 
<?php }
}
