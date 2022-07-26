//Обработка JavaScript
const php = () => {
    return $.gulp.src($.path.php.src)
        .pipe($.gp.plumber())
        .pipe($.gulp.dest($.path.php.dest))
}

module.exports = php