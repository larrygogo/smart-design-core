import fs from 'fs'
import psdParser from 'psd'
import Template from './base/Template'
import TextLayer from './layers/TextLayer'
import ImageLayer from './layers/ImageLayer'
import { ParserOptions } from 'webpack'

export default class Parser {
    public cover: any = null
    public nodes: Array<any> = []
    public options: ParserOptions | undefined
    public layers: Array<LayerData> = []
    public template: Template

    constructor(url: string, options?: ParserOptions) {
        const psd = psdParser.fromFile(url)
        psd.parse()
        this.cover = psd.image.toPng()
        this.nodes = psd.tree().descendants()
        const { top, bottom, left, right } = psd.tree().coords
        this.options = options
        this.template = new Template(right - left, bottom - top)
        this.parseNode()
    }

    getTemplate() {
        return this.template
    }

    saveAsPng(path: string) {
        const image = this.cover
        return new Promise((resolve, reject) => {
            const chunks: any[] = [];
            image.pack(); 
            image.on('data', (chunk: any) => {
                chunks.push(chunk);
            });
            image.on('end', () => {
                const buffer = Buffer.concat(chunks)
                fs.writeFile(path, buffer, err => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            });
            image.on('error', (err: any) => {
                reject(err);
            });
        });
    }

    private parseNode() {
        this.nodes.forEach(node => {
            const type = node.get("typeTool")
            if(type) {
                const layer = new TextLayer(node)
                this.template.addLayer(layer)
            } else {
                const layer = new ImageLayer(node)
                this.template.addLayer(layer)
            }
        })
    }




}
