//Обработка JavaScript
const json = () => {
    return $.gulp.src($.path.json.src)
        .pipe($.gp.plumber())
        .pipe($.gulp.dest($.path.json.dest))
}

module.exports = json