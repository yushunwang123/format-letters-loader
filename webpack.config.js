const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'url-loader',
                    'raw-test-loader',
                ]
            },
            {
                exclude: /\.(css|js|html|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'asset',
                        }
                    },
                    {
                        loader: 'format-letters-loader.js',
                        options: {
                            formatType: 'U2L'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 解析loader包是设置模块如何被解析
    resolveLoader: {
        modules: ['./node_modules', './loader'],// 告诉 webpack 解析loader时应该搜索的目录。
    },
    // devtool: 'eval-source-map',
    mode: 'production'
}