const TestResult = require("../../../assets/TestResult");
const SingleTestResult = require("../../../assets/SingleTestResult");
const SimpleError = require("../../../assets/SimpleError");

const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');

const sinon = require('sinon');
let spy = sinon.spy(console, "log");

//PREPARE
let testResult = new TestResult("fero.module1.exam1.task1");
let browser;
let subTests = [];

let app = require("../task7");


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
        app.numbers(13);
        assert(spy.calledWith("0 - parzysta"));
        assert(spy.calledWith("1 - nieparzysta"));
        assert(spy.calledWith("2 - parzysta"));
        assert(spy.calledWith("3 - nieparzysta"));
        assert(spy.calledWith("4 - parzysta"));
        assert(spy.calledWith("5 - nieparzysta"));
        assert(spy.calledWith("6 - parzysta"));
        assert(spy.calledWith("7 - nieparzysta"));
        assert(spy.calledWith("8 - parzysta"));
        assert(spy.calledWith("9 - nieparzysta"));
        assert(spy.calledWith("10 - parzysta"));
        assert(spy.calledWith("11 - nieparzysta"));
        assert(spy.calledWith("12 - parzysta"));
        assert(spy.calledWith("13 - nieparzysta"));
        test1.points = 1;
    });
});
