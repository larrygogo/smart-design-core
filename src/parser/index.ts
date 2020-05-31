import psdParser from 'psd'
import Template from './base/Template'
import Layer from './base/Layer'
import TextLayer from './layers/TextLayer'
import ImageLayer from './layers/ImageLayer'
import { ParserOptions } from 'webpack'

export default class Parser {
    public nodes: Array<NodeTree> = []
    public options: ParserOptions | undefined
    public layers: Array<LayerData> = []
    // public template: Template

    constructor(url: string, options?: ParserOptions) {
        const psd = psdParser.fromFile(url)
        psd.parse()
        this.nodes = psd.tree().descendants()
        // const layers = psd.getDescendants()
        // const {width, height} = psd._psd_.imageData

        // this.psd = psd
        // this.options = options
        // this.template = new Template(width, height)
        this.parseNode()
    }

    getTemplate() {
        // return this.template as TemplateData
    }

    // saveAsPng(path: string): void {
    //     try {
    //         this.psd._psd_.imageData.saveAsPng(path)
    //     } catch(e) {
    //         console.log(e)
    //     }
    // }

    private parseNode() {
        this.nodes.forEach(node => {
            const type = node.get("typeTool")
            if(type) {
                const layer = new TextLayer(node)
            } else {
                console.log("image")
            }
            // const layerInfo = Layer.getInfo(item.additional.luni)
            // if (layerInfo.type && layerInfo.type === 'text') {
            //     const layer = new TextLayer(item)
            //     this.template.addLayer(layer as LayerData)
            // } else if (layerInfo.type && layerInfo.type === 'image') {
            //     let layer
            //     if(this.options && this.options.imageMode) {
            //         layer = new ImageLayer(item, this.options.imageMode)
            //     } else {
            //         layer = new ImageLayer(item, )
            //     }
            //     this.template.addLayer(layer as LayerData)
            // }
        })
    }




}
