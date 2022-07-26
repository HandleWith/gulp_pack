const webpack = require("webpack-stream")

//Обработка JavaScript
const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.plumber())
        .pipe($.gp.babel())
        .pipe(webpack($.app.webpack))
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
}

module.exports = js