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

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: "3000"
    },
    module: {
        rules: [BabelRuler, SVGRuler]
    }
};