
const env = process.env.NODE_ENV;
const ExtractTextPlugin = require('extract-text-webpack-plugin') ;

module.exports = {

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions']}}]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: env ==='production'
                ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
                : ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit : 4000 ,
                            name: 'images/[hash]-[name].[ext]'}
                    },
                    'image-webpack-loader',
                ]
            }
        ]
    },
    plugins: env === 'production'
        ? [
            new ExtractTextPlugin({
                filename: "css/[name].[hash].css",
                disable: false,
                allChunks: true
            })
          ]
        :[]
}