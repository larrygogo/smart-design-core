import fs from 'fs'
import _ from 'lodash'
import path from 'path'



export default class Render {
    public template: TemplateData
    public options: RenderOptions

    constructor(template: TemplateData, options: RenderOptions) {
        this.template = template
        this.options = options
        if(!this.options.savePath) {
            throw new Error("options.savePath must be give")
        }
        if(!this.options.tempPath) {
            throw new Error("options.tempPath must be give")
        }
    }

    async run() {
        const PCR = require("puppeteer-chromium-resolver")
        const pcr = await PCR();
        const browser = await pcr.puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            executablePath: pcr.executablePath
        }).catch(function (error: any) {
            console.log(error);
        });
        const page = await browser.newPage();
        page.setViewport({
            width: this.template.width,
            height: this.template.height
        })
        const fileString = fs.readFileSync(this.options.tempPath)
        const template = _.template(fileString.toString("utf8"))
        const tempPath = path.join(this.options.savePath, this.options.saveName + '.html')
        const tempImagePath = path.join(this.options.savePath, this.options.saveName + '.png')
        const file = template(this.template)
        fs.writeFileSync(tempPath, file)
        await page.goto("file://" + tempPath)
        await page.content();
        await page.screenshot({ path: tempImagePath })
        if(!this.options.debug) {
            fs.unlinkSync(tempPath)
        }
        await page.close();
        await browser.close()
    }
}