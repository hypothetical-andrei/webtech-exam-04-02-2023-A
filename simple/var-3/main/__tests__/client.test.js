const puppeteer = require('puppeteer')
let browser
let page

describe('local', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({headless : true})
    page = await browser.newPage()
  })

  it('Page should contain button with id #load', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
  })
  
  it('Load data on click. Table should have 0 elements if load button is not clicked.', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.waitForSelector('#table')
    const numberOfChildren = await page.evaluate(() => {
        const table = document.querySelectorAll('table tr')
        return table.length
    })
    expect(numberOfChildren).toEqual(0)
    await page.click('#load')
    const tableRows = await page.evaluate(() => {
        const trs = Array.from(document.querySelectorAll('table tr'))
        return trs.map(tr => tr.innerHTML)
    })
    expect(tableRows[0]).toContain('John');
    expect(tableRows[1]).toContain('Jane');
  })
  
   it('Page should contain input with id name', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#name')
    const input = await page.evaluate(() => {
        return document.querySelectorAll('#name');
    })
    expect(input).toBeTruthy()
  })
  
  it('Delete one row after clicking delete button', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.waitForSelector('#delete');
    await page.click('#load')
    await page.waitForSelector('#table')
    await page.focus('#name');
    page.keyboard.type('John');
    await page.click('#delete')
    const numberOfChildren = await page.evaluate(() => {
        const table = document.querySelectorAll('table tr')
        return table.length
    })
    expect(numberOfChildren).toEqual(1);
  })
  
  afterAll(() => {
    browser.close()
  })
})