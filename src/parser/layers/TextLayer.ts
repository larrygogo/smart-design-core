import _ from 'lodash'
import Layer from "../base/Layer";

export default class TextLayer extends Layer {
    public value: string = ""

    constructor(node: any) {
        super(node)
        const  { text: { value }} = node.export()
        this.value = value
        this.style.color = this.getColor(node)
        this.style.fontSize = this.getFontSize(node)
        this.style.textAlign = this.getTextAlign(node)
        this.style.fontFamily = this.getFontFamily(node)
        this.style.fontWeight = this.isBold(node)
        this.style.fontStyle = this.getFontStyle(node)
        this.style.lineHeight = this.getLineHeight(node)
        this.style.letterSpacing = this.getLetterSpacing(node)
        this.resetWidth()
    }

    private resetWidth() {
        const length = this.value.length
        const fontSize = this.style.fontSize || 16
        const letterSpacing = this.style.letterSpacing || 0
        this.style.width = (fontSize + letterSpacing) * length 
    }

    private isBold(node: any){
        const fauxBold = node.get("typeTool").styles().FauxBold
        const { text: { font: { name } } } = node.export()
        if (/-Bold|-W6/g.test(name)){
            return fauxBold ? fauxBold[0] ? 900 : 700 : 700
        }
        return fauxBold ? fauxBold[0] ? 600 : 400 : 400
    }

    private getFontStyle(node: any){
        const fauxBold = node.get("typeTool").styles().FauxBold
        const { text: { font: { name } } } = node.export()
        // PSD中的斜体是按照字体来的 //这里只简单判断了字体名中是否包含italic
        // TODO 仿斜体
        if (/Italic/g.test(name)){
            return 'italic';
        }
        if (/Oblique/g.test(name)){
            return 'oblique';
        }
        return 'normal';
    }

    private getColor(node: any) {
        const toHex = (n: any) => {
            return parseInt(n, 10).toString(16).padStart(2, '0')
        }
        const  { text: { font: { colors } } } = node.export()
        if(!colors) {
            return "#000000"
        } else if (typeof colors === 'string') {
            return colors
        }
        const [ r = 0, g = 0, b = 0 ] = colors[0]
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    }

    private getLetterSpacing(node: any) {
        const tracking = node.get("typeTool").styles().Tracking
        const fontSize = this.getFontSize(node)
        if(!tracking) {
            return 0
        }
        const letterSpacing = tracking[0] * fontSize / 1000
        return letterSpacing
    }

    private getFontFamily(node: any) {
        const { text } = node.export()
        const typeTool = node.get('typeTool')
        const fontFamily = typeTool.engineData.ResourceDict.FontSet
          .filter((f: any) => !f.Synthetic)
          .map((f: any) => f.Name)
        
        return fontFamily[0] ? fontFamily[0] : text.font.name
    }

    private getFontSize(node: any) {
        const { text: { transform: { yy }, font: { sizes } } } = node.export()
        let size = 16
        if (sizes && sizes[0]) {
            if (yy !== 1) {
              size = Math.round((sizes[0] * yy) * 100) * 0.01
            } else {
              size = sizes[0]
            }
        }
        return size
    }

    private getTextAlign(node: any) {
        const  { text: { font: {alignment} } } = node.export()
        if(!alignment) {
            return "left"
        }
        return alignment[0]
    }


    private getLineHeight(node: any) {
        const fontSize = this.getFontSize(node)
        const leading = node.get("typeTool").styles().Leading
        if(!leading) {
            return 1
        }
        return 1 + Number((leading[0] / fontSize).toFixed(1))  
    }
}