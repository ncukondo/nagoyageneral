var webpack = require('webpack');
module.exports = {
    entry: {
        app: './app.js',
        index: './index.js',
        detail: './detail.js'
    },
    output: {
        path: __dirname + &quot;/dist&quot;,
        filename: &quot;[name].js&quot;
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app','app.js')
    ]
};
