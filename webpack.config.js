const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
    rules: [
        {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        },
    ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library:{
            type:"umd",
            name:"Boom"
        }
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
};