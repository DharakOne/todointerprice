const path = require('path');

const BabelRuler = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
}


const SVGRuler = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
}


const ImageRuler = {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
        outputPath: 'assets/images',
    }
}
const CSSRuler = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
}


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        sourceMapFilename: "[name].js.map"
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: "4000",
        historyApiFallback: true,
        https: false,
    },
    devtool: false,
    module: {
        rules: [BabelRuler, SVGRuler, ImageRuler,CSSRuler]
    }
};