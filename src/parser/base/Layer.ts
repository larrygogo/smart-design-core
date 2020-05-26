import layerInfo from '../config/LayerInfo'

export default class Layer {
    public name: string = ""
    public type: string = ""
    public category: string = ""
    public style: LayerStyle = {} as LayerStyle

    constructor(layerNode: LayerNode) {
        this.init(layerNode)
    }

    static getInfo(name: string): LayerInfo {
        return layerInfo[name] || {name: null, type: null, zIndex: null, category: null}
    }

    private init(layerNode: LayerNode): void {
        let layerInfo = Layer.getInfo(layerNode.additional.luni)
        this.name = layerInfo.name
        this.type = layerInfo.type
        this.category = layerInfo.category
        this.style = {
            left: layerNode.left,
            right: layerNode.right,
            top: layerNode.top,
            bottom: layerNode.bottom,
            width: layerNode.width,
            height: layerNode.height,
            zIndex: layerInfo.zIndex
        }
    }
}