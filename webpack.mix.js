const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/main.js", "public/js")
    .vue()
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve("resources/js")
            }
        },
        module: {
            rules: [{
                test: /\.svg$/,
                include: [path.resolve('resources/js/icons')],
                loader: 'svg-sprite-loader',
                options:  {symbolId: 'icon-[name]' }
                // use: [{ loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }],
            }]
        }
    });

// .postCss('resources/css/app.css', 'public/css', [

// ]);
