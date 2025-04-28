const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SitemapWebpackPlugin = require("../tools/sitemap-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const PageGenerator = require("../tools/page-generator"); // Добавляем импорт
const pagesConfig = require("../config/pages"); // Добавляем импорт конфига

module.exports = {
  entry: {
    casino: "./src/entries/casino.js",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      chunks: ["casino"],
    }),
    new HtmlWebpackPlugin({
      template: "public/registration.html",
      filename: "registration.html",
      chunks: ["casino"],
      
    }),
    new HtmlWebpackPlugin({
      template: "public/mirrors.html",
      filename: "mirrors.html",
      chunks: ["casino"],
    }),
    new HtmlWebpackPlugin({
      template: "public/downloads.html",
      filename: "downloads.html",
      chunks: ["casino"],
    }),
    new SitemapWebpackPlugin({
      baseUrl: "https://vavada-cis.com",
      publicDir: path.resolve(__dirname, "../public"),
      outputPath: path.resolve(__dirname, "../dist/sitemap.xml"),
      changefreq: "daily",
      priority: "0.8",
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tapAsync(
          "PageGeneratorPlugin",
          (compilation, callback) => {
            // Собираем имена файлов из compilation
            const assets = {};
            for (const filename of Object.keys(compilation.assets)) {
              if (filename.endsWith(".js")) {
                if (filename.includes("runtime")) {
                  assets["runtime"] = filename;
                } else if (filename.includes("vendors")) {
                  assets["vendors"] = filename;
                } else if (filename.includes("casino")) {
                  assets["casino"] = filename;
                }
              }
            }

            const generator = new PageGenerator({
              outputDir: compiler.options.output.path,
              config: pagesConfig,
              assets: assets,
            });

            generator.generatePages(pagesConfig.pages);
            callback();
          }
        );
      },
    },
    new CopyPlugin({
      patterns: [
        {
          from: "public/robots.txt",
          to: "robots.txt",
        },
        {
          from: "public/site.webmanifest",
          to: "site.webmanifest",
        },
        // {
        //   from: "public/assets",
        //   to: "assets",
        //   globOptions: {
        //     ignore: ["**/.DS_Store"], // игнорируем системные файлы
        //   },
        // },
        {
          from: "public/favicon.ico",
          to: "favicon.ico",
        },
        {
          from: "public/android-chrome-192x192.png",
          to: "android-chrome-192x192.png",
        },
        {
          from: "public/android-chrome-512x512.png",
          to: "android-chrome-512x512.png",
        },
        {
          from: "public/apple-touch-icon.png",
          to: "apple-touch-icon.png",
        },
        {
          from: "public/favicon-16x16.png",
          to: "favicon-16x16.png",
        },
        {
          from: "public/favicon-32x32.png",
          to: "favicon-32x32.png",
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
};
