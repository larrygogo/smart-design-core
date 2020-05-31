type imageMode = 'array' | 'base64'
type textAlign = 'left' | 'center' | 'right'

interface ParseOptions {
    imageMode: imageMode = 'array' | 'base64'
}

interface RenderOptions {
    text: RenderTexts
    savePath: string
    saveName: string
    debug: boolean
}

interface RenderTexts {
    main: RenderText
    sub: RenderText
    action: RenderText
}

interface RenderText {
    value: string
    textAlign: textAlign
}

interface LayerData {
    name: string
    type: string
    style: LayerStyle
    value?: string
    imageData?: Array<number> | string
}

interface TemplateData {
    width: number = 0
    height: number = 0
    layers: Array<LayerData> = []
}

interface LayerStyle {
    left: number
    top: number
    width: number
    height: number
    color?: string
    opacity?: string
    fontSize?: number
    textAlign?: string
    fontStyle?: string
    fontWeight?: string
    fontFamily?: string
    lineHeight?: number
    marginLeft?: string
    letterSpacing?: number
    textDecoration?: string
}

interface LayerInfo {
    name: string
    zIndex: number
    type: string
    category: string
}

interface LayerObject {
    [key: string]: any
}