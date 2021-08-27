const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        })
    ]
}

//run ng serve --extra-webpack-config webpack.partial.js -o