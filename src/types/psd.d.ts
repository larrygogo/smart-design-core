declare module 'psd' {
    function fromFile(url: string) : PSD
}

interface PSD {
    parse: Function
    tree: Function
    export: Function
}

interface NodeTree {
    get(attr: string): string | number | boolean | TypeTool
    
}

interface TypeTool {
    export()
    size: Array
    styles: Function
    Tracking: Array
}