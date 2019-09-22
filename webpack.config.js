const path = require("path");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
    mode: IS_PRODUCTION ? "production" : "development",
    entry: "./src/index.js",
    target: "node",
    output: {
        path: path.resolve(__dirname, "./dist"),
        library: "editorjs-component-selector",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/gi,
                exclude: /node_modules/gi,
                loader: "babel-loader"
            },
            {
                test: /\.css$/gi,
                exclude: /node_modules/gi,
                loaders: ["iso-morphic-style-loader", "css-loader"]
            }
        ]
    }
};
