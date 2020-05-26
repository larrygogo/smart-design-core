import Layer from "../base/Layer";

export default class TextLayer extends Layer {
    public value: string = ""

    constructor(layerNode: LayerNode) {
        super(layerNode)
        const wordSnippets = layerNode.get('wordSnippets')
        this.value = layerNode.get('text')
        this.style.fontWeight = wordSnippets[0]['font-weight']
        this.style.fontStyle = wordSnippets[0]['font-style'],
        this.style.fontFamily = wordSnippets[0]['font-family']
        this.style.fontSize = wordSnippets[0]['font-size']
        this.style.opacity = wordSnippets[0]['opacity']
        this.style.color = wordSnippets[0]['color']
        this.style.letterSpacing = wordSnippets[0]['letter-spacing']
        this.style.marginLeft = wordSnippets[0]['margin-left']
        this.style.lineHeight = wordSnippets[0]['line-height']
        this.style.textDecoration = wordSnippets[0]['text-decoration']
    }
}