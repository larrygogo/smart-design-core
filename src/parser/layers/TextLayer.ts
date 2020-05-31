import _ from 'lodash'
import Layer from "../base/Layer";

export default class TextLayer extends Layer {
    public value: string = ""

    constructor(node: NodeTree) {
        super(node)
        const typeTool = node.get('typeTool') as TypeTool
        const textInfo = typeTool.export()
        const letterSpacing = this.getLetterSpacing(typeTool)
        // this.value = layerNode.get('text')
        // console.log(wordSnippets)
        // this.style.fontWeight = wordSnippets[0]['font-weight']
        // this.style.fontStyle = wordSnippets[0]['font-style'],
        // this.style.fontFamily = wordSnippets[0]['font-family']
        // this.style.fontSize = Number(wordSnippets[0]['font-size'].replace("px", ""))
        // this.style.opacity = wordSnippets[0]['opacity']
        // this.style.color = wordSnippets[0]['color']
        // this.style.letterSpacing = _.isNaN(letterSpacing) ? 0 : letterSpacing
        // this.style.marginLeft = wordSnippets[0]['margin-left']
        // // this.style.lineHeight = wordSnippets[0]['line-height']
        // this.style.lineHeight = layerNode.height
        // this.style.textDecoration = wordSnippets[0]['text-decoration']
    }

    private isBold(fontFamily: string){
        // PSD中的加粗是按照字体来的 //这里只简单判断了字体名中是否包含bold
        if (/-Bold|-W6/g.test(fontFamily)){
            return 'bold';
        }
        return 'normal';
    }

    private getLetterSpacing(typeTool: TypeTool) {
        console.log(typeTool.styles())
        // const typeTool = node.get('typeTool') as TypeTool
        // const fontSize = typeTool.FontSize[0]
        // const value = typeTool.styles().Tracking
        // if(value) {
        //     var fontSize = fontSize;
        //     // 字体大小 X tracing / 1000 (1/1000em)
        //     return ~~(fontSize*value/1000)+'px';
        // }
    }
}