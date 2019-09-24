const TestResult = require("../../../assets/TestResult");
const SingleTestResult = require("../../../assets/SingleTestResult");
const SimpleError = require("../../../assets/SimpleError");

const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');


//PREPARE
let testResult = new TestResult("fero.module1.exam1.task1");
let browser;
let subTests = [];

let app = require("../task3");


/**
 * DATA
 */
let number = 12;
let dividersInGoodOrder = [6, 4, 3, 2, 1];

describe("", () => {

    before(async () => {
        // browser = await puppeteer.launch({
        //     args: ["--no-sandbox", "--disable-setuid-sandbox"]
        // });
        //
        // const context = await browser.createIncognitoBrowserContext();
        // let page = await context.newPage();
        // let filePath = path.join(__dirname, "../zadanie01.html");
        // await page.goto(`file://${filePath}`);
    });

    after(async () => {
        // await browser.close();
        subTests.forEach(t => testResult.addTest(t));
        testResult.send();
    });

    let test1 = new SingleTestResult(
        "Zwracanie poprawnych dzielników w dobrej kolejności",
        "Metoda nie zwraca poprawnych dzielników bądź zwraca w złej kolejności",
        1
    );
    subTests.push(test1);

    it(test1.testName, async () => {
            let result = app.factors(number);
            assert.deepEqual(result, dividersInGoodOrder);
            test1.points = 1;
        }
    );

})