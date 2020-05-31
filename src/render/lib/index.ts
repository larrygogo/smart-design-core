import _ from 'lodash'

function setTextStyle(layer: LayerData, text: RenderText): LayerData {
    layer.value = text.value
    layer.style.textAlign = text.textAlign
    const width = layer.style.width
    if(layer.style.fontSize) {
        const letterSpacing = _.isNumber(layer.style.letterSpacing) ? layer.style.letterSpacing : 0
        layer.style.width = text.value.length * (layer.style.fontSize + letterSpacing)
    }
    // if(layer.style.textAlign === "center") {
    //     layer.style.left += (width - layer.style.width) / 2
    //     layer.style.right -= (width - layer.style.width) / 2
    // } else if(layer.style.textAlign === "right"){
    //     layer.style.left += (width - layer.style.width)
    //     layer.style.right -= (width - layer.style.width)
    // }
    return layer
}

function renderText(template: TemplateData, texts: RenderTexts): TemplateData {
    const layers = template.layers
    template.layers = template.layers.map((item: LayerData) => {
        if(item.name === "text_main") {
            item = setTextStyle(item, texts.main)
        } else if (item.name === "text_sub") {
            item = setTextStyle(item, texts.sub)
        } else if (item.name === "text_action") {
            item = setTextStyle(item, texts.action)
        }
        return item
    })
    return template
}

export {
    renderText
}