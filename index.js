#! /usr/bin/env node
import {
  unlink,
  readFile,
  writeFile } from 'fs/promises'

import { resetCss } from './reset-css.js'


// await unlink("./src/App.css")
// console.log("Deleted:: ./src/App.css")
//
// await unlink("./src/App.test.js")
// console.log("Deleted:: ./src/App.test.js")
//
// await unlink("./src/index.css")
// console.log("Deleted:: ./src/index.css")
//
// await unlink("./src/logo.svg")
// console.log("Deleted:: ./src/logo.svg")
//
// await unlink("./src/reportWebVitals.js")
// console.log("Deleted:: ./src/reportWebVitals.js")
//
// await unlink("./src/setupTests.js")
// console.log("Deleted:: ./src/setupTests.js")

await writeFile(new URL('./src/style.css', import.meta.url), resetCss)
