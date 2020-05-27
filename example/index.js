const fs = require('fs')
const path = require('path')
const {Parser, Render} = require('../index')
const _ = require('lodash')
const file = path.resolve(__dirname, './static/test.psd')
const parser = new Parser(file, {
    imageMode: "base64"
})
const template = parser.getTemplate()
const render = new Render(template, {
    text: {
        main: {
            value: "这是一段很长的测试文案",
            textAlign: "center"
        },
        sub: {
            value: "这是一段很长的测试文案",
            textAlign: "center"
        },
        action: {
            value: "这是一段很长的测试文案",
            textAlign: "center"
        }
    },
    savePath: path.join(__dirname, "static"),
    saveName: "test",
    debug: true
})

render.run(__dirname)
// parser.saveAsPng(path.join(__dirname, "static/test.png"))