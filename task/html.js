//Обработка HTML
const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber())
        .pipe($.gp.fileInclude())
        .pipe($.gp.htmlmin({collapseWhitespace: $.app.isProd}))
        .pipe($.gp.webpHtml())
        .pipe($.gulp.dest($.path.html.dest))
}

module.exports = html
