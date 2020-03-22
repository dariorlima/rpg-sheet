const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const darkThemeVars = require('antd/dist/dark-theme');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/'
    },
    devServer: {
        open: true,
        overlay: true,
        hot: true,
        progress: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', 'sass'],
        alias: {
            '@atoms': path.resolve(__dirname, 'src/lib', 'components/atoms'),
            '@molecules': path.resolve(__dirname, 'src/lib/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/lib/components/organisms'),
            '@pages': path.resolve(__dirname, 'src/lib/components/pages'),
            '@templates': path.resolve(__dirname, 'src/lib/components/templates'),
            '@app': path.resolve(__dirname, 'src/lib/components/app'),
            '@styles': path.resolve(__dirname, 'src', 'styles'),
            '@root/constants': path.resolve(__dirname, 'src/lib/constants'),
            '@redux/constants': path.resolve(__dirname, 'src/lib/redux/constants'),
            '@redux/actions': path.resolve(__dirname, 'src/lib/redux/actions'),
            '@redux/reducer': path.resolve(__dirname, 'src/lib/redux/reducers'),
            '@redux': path.resolve(__dirname, 'src/lib/redux'),
            '@root': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
                                ...darkThemeVars,
                            },
                            javascriptEnabled: true,
                        },
                    }
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "./public", 'index.html'),
            filename: "./index.html"
        })
    ]
};