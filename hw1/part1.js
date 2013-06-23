#!/usr/bin/env node
var fs = require('fs');
var outfile = "helloWorld.txt";
var out = "I am loving this course so far ! \n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
