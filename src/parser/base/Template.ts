import Layer from "./Layer"

export default class Template {
    public width: number = 0
    public height: number = 0
    public layers: Array<any> = []

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    addLayer(layer: Layer): void {
        this.layers.unshift(layer)
    }
}