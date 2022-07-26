const dell = require("del")

// Удаленеи директории
const clear = () => {
    return dell($.path.root)
}

module.exports = clear