import layerInfo from '../config/LayerInfo'

export default class Layer {
    public name: string = ""
    public type: string = ""
    public style: LayerStyle = {} as LayerStyle

    constructor(node: any) {
        this.init(node)
    }

    private init(node: any): void {
        this.name = node.get("name")
        this.type = node.get("typeTool") ? 'text' : 'image'
        
        this.style = {
            top: node.get("top"),
            left: node.get("left"),     
            width: node.get("width"),
            height: node.get("height"),
            opacity: this.getOpacity(node),
            transform: this.getTransform(node)
        }
    }

    private getOpacity(node: any): any {
        return node.get("opacity") / 255;
    }

    private getTransform(node: any) {
        const { text } = node.export()
        if(!text) {
            return { xx: 0, xy: 0, yx: 0, yy: 0, tx: 0, ty: 0 }
        }
        const { transform } = text
        if(!transform) {
            return { xx: 0, xy: 0, yx: 0, yy: 0, tx: 0, ty: 0 }
        }
        return transform
    }
}