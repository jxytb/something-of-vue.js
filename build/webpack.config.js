var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, '../app/index/index.js'),
    output: {
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            }
        ]
    }
}