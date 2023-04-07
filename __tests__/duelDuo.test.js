const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button displays a div with id choices", async () => {
    await driver.get('http://localhost:8000');
    await driver.sleep(2000);
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.id('choices'), 1000));
  })

  test("add to duo button displays the div with id = 'playerduo'", async () => {
    await driver.get('http://localhost:8000');
    await driver.sleep(1000);
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(1000);
    await driver.findElement(By.class('bot-btn')).click()
    //unsure why selecting the button by class is not working.
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id('player-duo'), 1000))
  })
});