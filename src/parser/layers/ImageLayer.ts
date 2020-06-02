import fs from 'fs'
import Layer from "../base/Layer";

export default class ImageLayer extends Layer {
    public image: any = ""
    public imageData: any

    constructor(node: any, imageMode: imageMode = "array") {
        super(node)
        this.imageData = node.layer.image.toPng()
    }

    private streamToBuffer() {
        const image = this.imageData
        return new Promise((resolve, reject) => {
            const chunks: any[] = [];

            image.pack();  // [1]
            image.on('data', (chunk: any) => {
                chunks.push(chunk);  // [2]
            });
            image.on('end', () => {
                resolve(Buffer.concat(chunks));  // [3]
            });
            image.on('error', (err: any) => {
                reject(err);
            });
        });
    }

    public  toBase64() {
        return new Promise((resolve, reject) => {
            this.streamToBuffer().then((buffer: any) => {
                resolve(`data:image/png;base64,${buffer.toString('base64')}`)
            }).catch(err => {
                reject(err)
            })
        })
    }

    public setImage(image: any) {
        this.image = image
    }

    public async saveAsPng(path: string) {
        return new Promise((resolve, reject) => {
            this.streamToBuffer().then((buffer: any) => {
                fs.writeFile(path, buffer, err => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            }).catch(err => {
                reject(err)
            })
        })
    }
}