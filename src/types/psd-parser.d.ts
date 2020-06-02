declare module 'psd-parser' {
    function parse(url: string) : PSD
    function getDescendants()
}

interface PSD {
    image: any;
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