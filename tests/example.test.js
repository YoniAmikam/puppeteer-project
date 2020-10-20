const puppeteer = require('puppeteer');

describe('My First Puppeteer Test', () => {
    it('Should launch the browser', async function() {
        const browser = await puppeteer.launch({
            headless: true,
            devtools: false 
        })
        const page = await browser.newPage()
        await page.goto('http://contractorsinsurancereview.com/ExampleForm/')
        await page.type('#name', 'Yoni Amikam')
        await page.type('#email', 'yoniamikam1@gmail.com')
        await page.type('#phone', '+972-53-2760703')
        await page.type('#company', 'Jones')
        await page.select('#employees','51-500')
        await page.screenshot({path: 'user_details.png'});
        await page.click('button[class="primary button"]')
        console.log('Done')
        await browser.close()
    })
})