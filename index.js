#! /usr/bin/env node
import {
  unlink,
  readFile,
  writeFile } from 'fs/promises'

import { resetCss } from './reset-css.js'
import { resetApp } from './reset-app.js'

const delFiles = ["App.css", "App.test.js", "index.css", "logo.svg",  "setupTests.js"]

for(let i in delFiles){
  try {
    await unlink(`./src/${delFiles[i]}`)
    console.log(`Deleted:: ./src/${delFiles[i]}`)
  } catch (e) {
    console.log(`Not Available:: ${delFiles[i]}`);
  }
}

await writeFile("./src/index.css", resetCss)
console.log("Added:: index.css");

await writeFile("./src/App.js", resetApp)
console.log("Reset:: App.js");
