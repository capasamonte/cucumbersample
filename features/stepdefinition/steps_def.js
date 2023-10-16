const { Builder, By } = require('selenium-webdriver');
const { Given, When, Then, After, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const firefox = require('selenium-webdriver/firefox');
const reporter = require('cucumber-html-reporter');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

const URL = 'https://www.saucedemo.com/';

chai.use(chaiAsPromised);
var expect = chai.expect;

Given('I am on the SauceDemo login page', async function () {
    const options = new firefox.Options();
    options.headless(); // Enable headless mode
  
    driver = new Builder()
      .usingServer('http://localhost:4444/wd/hub') // Selenium server address
      .forBrowser('firefox')
      .setFirefoxOptions(options) // Set Firefox options with headless mode
      .build();

  await driver.get(URL);
});

When('I enter the username {string} and password {string}', async function (username, password) {
//   const usernameField = await driver.findElement(By.id('user-name'));
  const usernameField = await driver.findElement(By.xpath("//*[@id='user-name']"))
  await usernameField.sendKeys(username);

  const passwordField = await driver.findElement(By.id('password'));
  await passwordField.sendKeys(password);
});

When('I click the login button', async function () {
  const loginButton = await driver.findElement(By.xpath("//input[contains(@class, 'submit-button')]"));
  await loginButton.click();
});

Then('I should be logged in', async function () {
    const landingPage = await driver.getCurrentUrl();
    expect(landingPage).to.equal("https://www.saucedemo.com/inventory.html");
});

Then('I should see an error message', async function () {

});

After(async function () {
    if (driver) {
        
        // Quit the WebDriver
        await driver.quit();
   
      }
});