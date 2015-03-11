#!/usr/bin/env node
var pkgInfo = require('../package.json');
var program = require('commander');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var mkdirp = require('mkdirp');

//init CLI options
program
.version(pkgInfo.version)
.option('-n, --new [componentName]', 'Add a new component')
.parse(process.argv);


if (!program.new) {
  console.log('-n is a required parameter. try gen -h for more details');
  process.exit(1);
}

//configuration
var componentName = program.new;
var folderName = path.resolve(process.cwd(), 'lib', componentName);
var fileName = path.resolve(folderName, 'index.js');

//check we don't already have a component of this name
if (fs.existsSync(folderName)) {
  console.log('This component already exists.');
  process.exit(1);
}

//template data
var tmplData = {
  componentName: componentName
}

//bootstrap file
var bootstrapTmplData = fs.readFileSync(path.resolve(__dirname, 'templates/bootstrap.tmpl')).toString();
var bootstrapFilelData = _.template(bootstrapTmplData)(tmplData)
var bootstrapFileName = path.resolve(process.cwd(), componentName + '.js');

//directive file
var moduleTmplData = fs.readFileSync(path.resolve(__dirname, 'templates/default.tmpl'));
var moduleFileData = _.template(moduleTmplData)(tmplData);

fs.writeFileSync(fileName, moduleFileData, 'utf8');
fs.writeFileSync(bootstrapFileName, bootstrapFileData, 'utf8');
