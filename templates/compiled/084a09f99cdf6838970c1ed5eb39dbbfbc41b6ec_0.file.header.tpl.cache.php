<?php
/* Smarty version 3.1.29, created on 2016-01-25 09:02:56
  from "C:\Dropbox\Sites\nagoyageneral\templates\header.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_56a5e4c0ef5130_26905272',
  'file_dependency' => 
  array (
    '084a09f99cdf6838970c1ed5eb39dbbfbc41b6ec' => 
    array (
      0 => 'C:\\Dropbox\\Sites\\nagoyageneral\\templates\\header.tpl',
      1 => 1453712567,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_56a5e4c0ef5130_26905272 ($_smarty_tpl) {
$_smarty_tpl->compiled->nocache_hash = '3217956a5e4c0e85e47_06146072';
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>
    <!--[if lt IE 9]>
    <?php echo '<script'; ?>
 src="http://html5shiv.googlecode.com/svn/trunk/html5.js"><?php echo '</script'; ?>
>
    <![endif]-->

    <?php if ($_smarty_tpl->tpl_vars['usingJQuery']->value) {?>
    <!-- jQuery読み込み -->
    <?php echo '<script'; ?>
 type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"><?php echo '</script'; ?>
>
    <?php }?>
    <link media="all" rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['STYLE_DIR']->value;?>
/common.css" />
    <?php
$_from = $_smarty_tpl->tpl_vars['additionalstyles']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_item_0_saved_item = isset($_smarty_tpl->tpl_vars['item']) ? $_smarty_tpl->tpl_vars['item'] : false;
$__foreach_item_0_saved_key = isset($_smarty_tpl->tpl_vars['key']) ? $_smarty_tpl->tpl_vars['key'] : false;
$_smarty_tpl->tpl_vars['item'] = new Smarty_Variable();
$_smarty_tpl->tpl_vars['key'] = new Smarty_Variable();
$_smarty_tpl->tpl_vars['item']->_loop = false;
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->_loop = true;
$__foreach_item_0_saved_local_item = $_smarty_tpl->tpl_vars['item'];
?>
    <link media="all" rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['STYLE_DIR']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
" />
    <?php
$_smarty_tpl->tpl_vars['item'] = $__foreach_item_0_saved_local_item;
}
if ($__foreach_item_0_saved_item) {
$_smarty_tpl->tpl_vars['item'] = $__foreach_item_0_saved_item;
}
if ($__foreach_item_0_saved_key) {
$_smarty_tpl->tpl_vars['key'] = $__foreach_item_0_saved_key;
}
?>

<!-- スタイル -->
<style type="text/css"></style>

<!-- スクリプト -->
<?php echo '<script'; ?>
 type="text/javascript" >
<?php echo '</script'; ?>
>


</head>
<body>
<?php }
}