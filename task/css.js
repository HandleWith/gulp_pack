//Обработка CSS
const css = () => {
    return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.plumber())
        .pipe($.gp.concat("main.css"))
        .pipe($.gp.cssImport())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shortHand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "main.css" }))
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
        .pipe($.gp.rename({ suffix: ".min" }))
        .pipe($.gp.csso())
        .pipe($.gp.size({ title: "main.min.css" }))
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
}

module.exports = css