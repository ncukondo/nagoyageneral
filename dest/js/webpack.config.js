var webpack = require('webpack');
var src = './src/'
module.exports = {
    entry: {
        footer_common: src+'footer_common.js',
    },
    output: {
        path: __dirname + &quot;/dist&quot;,
        filename: &quot;[name].js&quot;
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('footer_common','footer_common.js')
    ]
    module: {
     loaders: [
         { test: /\.css$/, loaders: ['style-loader','css-loader'] },
     ]

};
