declare module 'psd' {
    function fromFile(url: string) : PSD
}

interface PSD {
    parse: Function
    tree: Function
    export: Function
    get: Function
}