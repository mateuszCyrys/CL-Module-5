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
const esprimaHelper = require("../../../assets/EsprimaHelper");

//PREPARE
let testResult = new TestResult("fero.module2.lab.funkcje-strzalkow.wprowadzenie.task1");
let browser;
let subTests = [];

console.log("Zgłoszono jako wykonane");

// console.log(typeof  esprimaHelper.traverse);
//
// esprimaHelper.traverse(
//     __dirname + "/../task1.js",
//     (node) => {
//         if (node.id && node.id.name && node.id.name === "printArray") {
//             console.log(node.init.type);
//         }
//     });
