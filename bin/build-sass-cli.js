#!/usr/bin/env node
require('babel/register');

//to get es6 joy we need to require our function in
//as babel/register overrides the require function.
var buildSass = require('./lib/build-sass');
buildSass();


/*

//deps
var fs = require('fs');
var path = require('path');
var util = require('util');
var _ = require('lodash');
var q = require('q');
var glob = require('glob');
var sass = require('node-sass');
var autoprefixer = require('autoprefixer')
var _glob = q.denodeify(glob);

var sassFiles = process.cwd() + '/lib/**//*.scss';

_glob(sassFiles)
.then(function(files){
  files.forEach(function(filePath){
    //sub out scss for css
    var outputFilePath = filePath.replace(/scss$/, 'css');
    //get sass content
    var sassContent = fs.readFileSync(filePath).toString();

    options = {
      data: sassContent,
      includePaths: ['sass/']
    }

    //compile the sass
    var compiledCss = sass.renderSync(options)
    .css.toString();

    //auto prefix the css
    compiledCss = autoprefixer.process(compiledCss).css;

    //write the sass files
    fs.writeFileSync(outputFilePath, compiledCss, 'utf8');
    console.log(util.format('compiled %s', outputFilePath));

  });
  process.exit(0);
})
.catch(function(err){
  console.log('-----------------------');
  console.log(err);
  console.log('-----------------------');
  process.exit(1);
})
*/
