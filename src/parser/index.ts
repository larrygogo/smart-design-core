import psdParser from 'psd-parser'
import Template from './base/Template'
import Layer from './base/Layer'
import TextLayer from './layers/TextLayer'
import ImageLayer from './layers/ImageLayer'
import { ParserOptions } from 'webpack'

export default class Parser {
    public psd: PSD
    public options: ParserOptions | undefined
    public layers: Array<LayerData> = []
    public template: Template

    constructor(url: string, options?: ParserOptions) {
        const psd = psdParser.parse(url)
        const layers = psd.getDescendants()
        const {width, height} = psd._psd_.imageData

        this.psd = psd
        this.options = options
        this.template = new Template(width, height)
        this.parseNode(layers as Array<any>)
    }

    getTemplate() {
        return this.template as TemplateData
    }

    saveAsPng(path: string): void {
        try {
            this.psd._psd_.imageData.saveAsPng(path)
        } catch(e) {
            console.log(e)
        }
    }

    private parseNode(layers: Array<any>) {
        layers.forEach(item => {
            const layerInfo = Layer.getInfo(item.additional.luni)
            if (layerInfo.type && layerInfo.type === 'text') {
                const layer = new TextLayer(item)
                this.template.addLayer(layer as LayerData)
            } else if (layerInfo.type && layerInfo.type === 'image') {
                let layer
                if(this.options && this.options.imageMode) {
                    layer = new ImageLayer(item, this.options.imageMode)
                } else {
                    layer = new ImageLayer(item, )
                }
                this.template.addLayer(layer as LayerData)
            }
        })
    }




}
