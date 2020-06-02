type imageMode = 'array' | 'base64'
type textAlign = 'left' | 'center' | 'right'

interface ParseOptions {
    imageMode: imageMode = 'array' | 'base64'
}

interface RenderOptions {
    savePath: string
    saveName: string
    debug: boolean
}

interface LayerData {
    name: string
    type: string
    style: LayerStyle
    value?: string
    image?: any 
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
    fontWeight?: string | number
    fontFamily?: string
    lineHeight?: number
    letterSpacing?: number
    transform: Transform
}

interface Transform {
    xx: number,
    xy: number,
    yx: number,
    yy: number,
    tx: number,
    ty: number
}

interface LayerInfo {
    name: string
    type: string
}

interface LayerObject {
    [key: string]: any
}