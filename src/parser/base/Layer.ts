import layerInfo from '../config/LayerInfo'

export default class Layer {
    public name: string = ""
    public type: string = ""
    public style: LayerStyle = {} as LayerStyle

    constructor(layerNode: NodeTree) {
        this.init(layerNode)
    }

    private init(node: NodeTree): void {
        this.name = node.get("name") as string
        this.type = node.get("typeTool") ? 'text' : 'image'
        this.style = {
            left: node.get("left") as number,
            top: node.get("top") as number,
            width: node.get("width") as number,
            height: node.get("height") as number,
        }
    }
}