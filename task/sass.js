const gulpSass = require("gulp-sass")(require("sass"))

//Обработка SASS
const sass = () => {
    return $.gulp.src($.path.sass.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.sassGlob())
        .pipe(gulpSass())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "main.css" }))
        .pipe($.gp.if($.app.isDev, $.gulp.dest($.path.sass.dest, { sourcemaps: $.app.isDev })))
        .pipe($.gp.rename({ suffix: ".min" }))
        .pipe($.gp.csso())
        .pipe($.gp.size({ title: "main.min.css" }))
        .pipe($.gp.if($.app.isProd, $.gulp.dest($.path.sass.dest, { sourcemaps: $.app.isDev })))
}


module.exports = sass