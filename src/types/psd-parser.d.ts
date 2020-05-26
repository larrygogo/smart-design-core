declare module 'psd-parser' {
    function parse(url: string) : PSD
    function getDescendants()
}

interface PSD {
    _psd_: {
        file: {
            buffer: Buffer
        },
        imageData: imageData
    }
    getTree()
    saveAsPng(path: string)
    getDescendants()
    getSlices()
}

interface ImageData {
    width: number
    height: number
    toImageData: Function
    saveAsPng(path: string)
}

interface LayerNode {
    top: number
    right: number
    bottom: number
    left: number
    width: number
    height: number
    channelCount: number
    channelInfo: Array<Object>,
    blendMode: string,
    opacity: number,
    visible: boolean,
    legacyName: string,
    additional: { TySh: Object, luni: string, lyid: number },
    parseImageData()
    saveAsPng(path: string)
    get(attrName: string)
}