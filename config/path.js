const pathSrc = "./src"
const pathDest = "./public"

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.{html, php}",
        watch: pathSrc + "/html/**/*.{html, php}",
        dest: pathDest
    },

    php: {
        src: pathSrc + "/php/*.php",
        watch: pathSrc + "/php/**/*.php",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },

    sass: {
        src: pathSrc + "/sass/*.{sass, scss}",
        watch: pathSrc + "/sass/**/*.{sass, scss}",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },
    
    json: {
        src: pathSrc + "/json/*.json",
        watch: pathSrc + "/json/**/*.json",
        dest: pathDest + "/json"
    },

    img: {
        src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: pathDest + "/img"
    },
    
    font: {
        src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/font"
    }
}