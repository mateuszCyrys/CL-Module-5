let TestResult, SingleTestResult, SimpleError;
try {
    TestResult = require("../../assets/TestResult");
    SingleTestResult = require("../../assets/SingleTestResult");
    SimpleError = require("../../assets/SimpleError");
}catch (e) {
    TestResult = require("../../../assets/TestResult");
    SingleTestResult = require("../../../assets/SingleTestResult");
    SimpleError = require("../../../assets/SimpleError");
}

const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');


//PREPARE
let testResult = new TestResult("fero.module1.exam1.task1");
let browser;
let subTests = [];

let app = require("../task6");


/**
 * DATA
 */
let array = [1, 2, 3, 4, 5];

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
        "Tworzenie i zwracanie tablicy",
        "Nie zwrócona tablica, bądź ma złą zawartość",
        1
    );
    subTests.push(test1);

    it(test1.testName, async () => {
        let result = app.createArray(5);
        assert.deepEqual(result, array);
        test1.points = 1;
    });


})
