global.$ = {
    //Пакеты
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),

    //Конфигурация
    path: require("./config/path.js"),
    app: require("./config/app.js"),
}

//Задачи
const clear = require('./task/clear')
const html = require('./task/html')
const sass = require('./task/sass')
const js = require('./task/js')
const json = require('./task/json')
const php = require('./task/php')
const img = require('./task/img')
const font = require('./task/font')

//Наблюдение
const watcher = () => {
    $.gulp.watch($.path.html.watch, html)
    $.gulp.watch($.path.sass.watch, sass)
    $.gulp.watch($.path.js.watch, js)
    $.gulp.watch($.path.json.watch, json)
    $.gulp.watch($.path.php.watch, php)
    $.gulp.watch($.path.img.watch, img)
    $.gulp.watch($.path.font.watch, font)
}

const build = $.gulp.series(
    clear,
    $.gulp.parallel(html, sass, js, json, php, img, font),
)

const dev = $.gulp.series(
    build,
    watcher
)

//Задачи
exports.html = html
exports.sass = sass
exports.js = js
exports.json = json
exports.php = php
exports.img = img
exports.font = font

//Сборка
exports.default = $.app.isProd 
    ? build
    : dev