import Layer from "../base/Layer";
import { createCanvas, createImageData } from 'canvas'

export default class ImageLayer extends Layer {
    public imageData: number[] | string = []

    constructor(layerNode: LayerNode, imageMode: imageMode = "array") {
        super(layerNode)
        const array = layerNode.parseImageData()
        if(imageMode === "base64") {
            // const arrayBuffer = Buffer.from(array)
            // console.log(arrayBuffer)
            // this.imageData = 'data:image/png;base64,' + arrayBuffer.toString("base64")

            const arrayBuffer = new Uint8ClampedArray(array)     
            const canvas = createCanvas(layerNode.width, layerNode.height)
            const ctx = canvas.getContext('2d')
            const imageData = createImageData(arrayBuffer, layerNode.width, layerNode.height)
            ctx.putImageData(imageData, 0, 0)
            this.imageData = canvas.toDataURL()
        } else {
            this.imageData = array
        }
    }
}