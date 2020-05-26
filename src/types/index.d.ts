type imageMode = 'array' | 'base64'
type textAlign = 'left' | 'center' | 'right'

interface ParseOptions {
    imageMode: imageMode = 'array' | 'base64'
}

interface RenderOptions {
    text: RenderTexts
    savePath: string
    saveName: string
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
    category: string
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
    right: number
    top: number
    bottom: number
    width: number
    height: number
    zIndex: number
    color?: string
    opacity?: string
    fontSize?: string
    fontStyle?: string
    fontWeight?: string
    fontFamily?: string
    lineHeight?: string
    marginLeft?: string
    letterSpacing?: string
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