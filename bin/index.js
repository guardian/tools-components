#!/usr/bin/env node
require('babel/register');
var program = require('commander');
var pkgInfo = require('../package.json');
var colors  = require('colors');
var capitalizeFirstChar = require('capitalize-first-char');

var generateMixin         = require('./lib/generate-mixin');
var generateSassComponent = require('./lib/generate-sass-component');
var genrateDirective      = require('./lib/generate-directive');
var generateBootstrap     = require('./lib/generate-bootstrap')

//init CLI options

//custom commands
var commandType = process.argv.slice(2, 3)[0];
var componentType = process.argv.slice(3, 4)[0];

program
  .version(pkgInfo.version)
  .option('-m, --mixin-name [mixin-name]', 'Mixin name')
  .option('-c, --component-name [component-name]', 'Component name')
  .option('-d, --directive-name [directive-name]', 'Directive name')
  .parse(process.argv);

if (commandType === 'new') {
  //generate a new sass mixin
  if (componentType === 'mixin') {
    generateMixin(program.mixinName, program.componentName);
  }
  //generate a new sass component
  else if (componentType === 'sass') {
    var mixinName = program.mixinName ? program.mixinName : program.componentName;
    generateMixin(mixinName, program.componentName);
  }
  //generates a new directive
  else if (componentType === 'directive') {
    genrateDirective(program.componentName);
  }
  //genrate a new component
  else if (componentType === 'component') {
    generateBootstrap(program.componentName);
  }
  else {
    console.log('You must specify a valid component type'.red);
  }
}

/*

// ------------------ SASS COMPONENT
if (program.sassComponent) {

  //if no mixin name is provided use the component name
  var mixinName = program.mixin ? program.mixin : program.component;

  //if someone generates a sass-component without a component name
  if (! program.component) {
    console.log('A valid component name must be used when generating a sass component'.red);
    process.exit(1);
  }


  generateMixin(mixinName, program.component);
  generateSassComponent(mixinName, program.component);

}

// ---------------- MIXIN
if (program.mixin) {

  //if someone generates a mixin without a component name
  if (! program.component) {
    console.log('A valid component name must be used when generating a mixin'.red);
    process.exit(1);
  }

  generateMixin(program.mixin, program.component);
}



/*
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var mkdirp = require('mkdirp');
var util = require('util');
var capitalizeFirstChar = require('capitalize-first-char');


//configuration
var componentName = program.new;
var folderName = path.resolve(process.cwd(), 'lib', componentName);
var fileName = path.resolve(folderName, 'index.js');

//check we don't already have a component of this name
if (fs.existsSync(folderName)) {
  console.log('This component already exists.');
  process.exit(1);
}

mkdirp.sync(folderName)

//template data
var tmplData = {
  componentName: componentName,
  capitalizeFirstChar: capitalizeFirstChar
}

//bootstrap file
var bootstrapTmplData = fs.readFileSync(path.resolve(__dirname, 'templates/bootstrap.tmpl')).toString();
var bootstrapFileData = _.template(bootstrapTmplData)(tmplData)
var bootstrapFileName = path.resolve(process.cwd(), componentName + '.js');

//directive file
var moduleTmplData = fs.readFileSync(path.resolve(__dirname, 'templates/default.tmpl'));
var moduleFileData = _.template(moduleTmplData)(tmplData);

fs.writeFileSync(fileName, moduleFileData, 'utf8');
fs.writeFileSync(bootstrapFileName, bootstrapFileData, 'utf8');

console.log(util.format('genrated %s successfully', componentName));
*/
