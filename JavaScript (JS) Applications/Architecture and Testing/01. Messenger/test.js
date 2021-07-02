const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
let browser, page; // Declare reusable variables
describe('E2E tests', async function() {
 this.timeout(6000)
  before(async () => { browser = await chromium.launch({headless: false, slowMo: 500}); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 
  it('loads static page with button "Refresh"', async function() {
    await page.goto('http://localhost:5500/01.Messenger/');
    await page.click('text=Refresh')
    await page.waitForTimeout(200)
    const content = await page.evaluate(el => el.value, await page.$('textarea'))
    expect(content).to.contains('Spami: Hello, are you there?')
    expect(content).to.contains('Spami: Hello, George nice to see you! :)))')
  });  
  it('Sends message', async function() {
     const author = 'Test'
      const content = 'TestContent'
    // await page.route('**/jsonstore/messenger',route => route.fulfill(json({author: author, content: content, _id: "111"})))
    await page.goto('http://localhost:5500/01.Messenger/');
    await page.fill('text=Message:', content)
    await page.fill('text=Name:',author)
   
    
    const [request]=await Promise.all([
        page.waitForRequest(request => request.url().includes('/jsonstore/messenger') && request.method() === 'POST'),
        page.click('text=Send')
    ])

    const parsed = JSON.parse(request.postData())
    expect(parsed.author).to.equal(author)
    
  });  
});
