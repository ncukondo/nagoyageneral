<?php
/* Smarty version 3.1.29, created on 2016-01-25 12:02:20
  from "C:\Dropbox\Sites\nagoyageneral\templates\footer.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_56a60ecc072493_10908459',
  'file_dependency' => 
  array (
    '18c43379169e33039436b9d005a3144000132f9d' => 
    array (
      0 => 'C:\\Dropbox\\Sites\\nagoyageneral\\templates\\footer.tpl',
      1 => 1453723331,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_56a60ecc072493_10908459 ($_smarty_tpl) {
echo '<script'; ?>
 type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['JAVASCRIPTS_DIR']->value;?>
/footer_common.js"><?php echo '</script'; ?>
>
<?php
$_from = $_smarty_tpl->tpl_vars['additionalfooterjavascripts']->value;
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
echo '<script'; ?>
 type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['JAVASCRIPTS_DIR']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
"><?php echo '</script'; ?>
>
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
</body>
</html>
<?php }
}
