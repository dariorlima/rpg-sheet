#!/usr/bin/env node

const path = require('path');
const ejs = require('ejs');
const fs = require('fs');


const operation = process.argv[2]; 

const currentDir = process.cwd();

const templatesDir = path.join(__dirname,'/templates')

console.log(templatesDir);

const templateName = "component.ejs"


const ejsOptions = {

};

const ejsCompiler = (str) => ejs.compile(str, options);

const jsx = ejs.renderFile(path.join(templatesDir, templateName),{ templateName: "Romoaldo"});

jsx.then(value => {
    fs.writeFile(path.join(currentDir,'/component.jsx'), value);
})

