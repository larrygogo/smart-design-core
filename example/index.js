const fs = require('fs')
const path = require('path')
const {Parser, Render} = require('../index')
const _ = require('lodash')
const file = path.resolve(__dirname, './static/test.psd')
const parser = new Parser(file, {
    imageMode: "base64"
})
// parser.saveAsPng(path.join(__dirname, "static/test.png"))

const template = parser.getTemplate()
// template.layers[3].toBase64().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
Promise.all(
template.layers.map(async layer => {
    if(layer.type === 'image') {
        const base64 = await layer.toBase64()
        layer.setImage(base64)
        delete layer.iamgeData
    }
}))


// template.layers[3].saveAsPng(path.join(__dirname, './static/test1.png')).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
const render = new Render(template, {
    savePath: path.join(__dirname, "static"),
    saveName: "test",
    debug: true
})

render.run()
// parser.saveAsPng(path.join(__dirname, "static/test.png"))