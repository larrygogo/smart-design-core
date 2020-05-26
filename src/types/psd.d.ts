declare module 'psd' {
    function fromFile(url: string) : PSD
}

interface PSD {
    parse()
    tree()
}