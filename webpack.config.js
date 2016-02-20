var config = {
    context: __dirname + "/app",
    entry: "./main.js",
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
module.exports = config;