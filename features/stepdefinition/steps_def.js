const { Builder, By } = require('selenium-webdriver');
const { Given, When, Then, After } = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const URL = 'https://www.saucedemo.com/';

Given('I am on the SauceDemo login page', async function () {
  driver = new Builder()
    .usingServer('http://localhost:4444/wd/hub') // Selenium server address
    .forBrowser('firefox')
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

});

After(function () {
  if (driver) {
    driver.quit();
  }
});