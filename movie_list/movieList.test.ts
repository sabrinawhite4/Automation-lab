import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:5500/index.html");
});

afterAll(async () => {
  await driver.quit();
});

describe( "Descriptions should match action" , () => {
    test("Adds a movie", async () => {
  let addButton = await driver.findElement(By.tagName("button"));

  let addBar = await driver.findElement(By.tagName("input")).sendKeys("Aladdin");

  await addButton.click();

  await driver.sleep(5000);
    });

    test("Crosses off movies", async () => {
  let crossOffMovie = await driver.findElement(By.xpath('//*[text()="Aladdin"]')
  );

  let uncrossMovie = await driver.findElement(By.xpath('//*[text()="Aladdin"]')
  );

  await crossOffMovie.click();

  await driver.sleep(2000);

  await uncrossMovie.click();

  await driver.sleep(5000);
    });

    test("Deletes Movie", async () => {
  let deleteMovie = await driver.findElement(By.xpath('//*[text()="x"]'));

  await deleteMovie.click();

  await driver.sleep(5000);
    });

});