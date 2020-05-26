export default class Template {
    public width: number = 0
    public height: number = 0
    public layers: Array<LayerData> = []

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    addLayer(layer: LayerData): void {
        this.layers.push(layer)
    }
}