const env = process.env.NODE_ENV
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main:'./src/index.js'
    },
    optimization: {
        // Allow shared and vendor dependencies to be split into separate bundles
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/i,
                    chunks: 'all',
                    name: 'vendor'
                }
            }
        },
        // Create a runtime bundle
        runtimeChunk: {
            name: 'runtime'
        }
    },
    devtool: 'source-map',
    performance: {
        hints: 'warning'
    },
    module: {
        rules: [
            {
                test: /\.s[c]ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: env === 'production',
            statsOptions: {
                source: false
            }
        }),
        new MiniCssExtractPlugin({
            // Set filename of stylesheet if production or development mode is used
            filename: env === 'production' ? 'style/min/[name].min.css' : 'style/[name].css' 
        })
    ],
    output: {
        path: path.resolve(__dirname, './dist/'),
        pathinfo: false,
        publicPath: '/',
        // Set filename of bundle if production or development mode is used
        filename: env === 'production' ? 'js/min/[name].bundle.min.js' : 'js/[name].bundle.js' 
    }
}