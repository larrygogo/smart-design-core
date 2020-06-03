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
template.layers.map(async (layer, index) => {
    if(layer.type === 'image') {
        const filepath = path.join(__dirname, `static/test+${index}.png`)
        await layer.saveAsPng(filepath)
        layer.setImage(filepath)
        delete layer.imageData
    }
    return layer
})).then(res => {
    template.layers = res
    console.log(template)
})


// template.layers[3].saveAsPng(path.join(__dirname, './static/test1.png')).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
const render = new Render(template, {
    savePath: path.join(__dirname, "static"),
    saveName: "test1",
    tempPath: path.join(__dirname, "static/template.html"),
    debug: true
})

render.run()
// parser.saveAsPng(path.join(__dirname, "static/test.png"))