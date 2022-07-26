//Обработка Image
const font = () => {
    return $.gulp.src($.path.font.src)
        .pipe($.gp.plumber())
        .pipe($.gp.fonter($.app.fonter))
        .pipe($.gulp.dest($.path.font.dest))
        .pipe($.gp.ttf2woff2())
        .pipe($.gulp.dest($.path.font.dest))
}

module.exports = font