const path = require("path");

// Инициализация WebPack плагинов
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Production',
    //     }),
    // ],

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'img/[name].[ext]',
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(?:ico|gif|png|jpg|svg|jpeg)$/i,
                type: "asset/resource",
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // eslint options (if necessary)
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./src/template.html"), // шаблон
            filename: "index.html", // название выходного файла
        }),
    ],
};
