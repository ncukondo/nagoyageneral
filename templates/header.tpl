<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>{$title}</title>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    {if $usingJQuery}
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    {/if}
    <script type="text/javascript" src="{$JAVASCRIPTS_DIR}/common.js"></script>
    {foreach from =$additionaljavascripts item=item key=key}
    <script type="text/javascript" src="{$JAVASCRIPTS_DIR}/{$item}"></script>
    {/foreach}
    <link media="all" rel="stylesheet" href="{$STYLES_DIR}/common.css" />
    {foreach from =$additionalstyles item=item key=key}
    <link media="all" rel="stylesheet" href="{$STYLES_DIR}/{$item}" />
    {/foreach}
</head>
<body>
