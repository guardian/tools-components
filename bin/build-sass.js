#!/usr/bin/env node
//get es6 joy times

//deps
var q = require('q');
var glob = require('glob');
var sass = require('node-sass');
var fs = require('fs');
var autoprefixer = require('autoprefixer')

var _glob = q.denodeify(glob);

var options = process.env.NODE_ENV === 'development'
  //dev sass options
  ? {}
  //production sass options
  : {}

var path = process.cwd() + '/lib/**/*.scss';

_glob(path)
.then(function(files){
  files.forEach(function(filePath){
    //sub out scss for css
    var outputFilePath = filePath.replace(/scss$/, 'css');
    //get sass content
    var sassContent = fs.readFileSync(filePath).toString();
    //compile the sass
    var compiledCss = sass.renderSync({
      data: sassContent
    }).css.toString();

    //auto prefix the css
    compiledCss = autoprefixer.process(compiledCss).css;

    //write the sass files
    fs.writeFileSync(outputFilePath, compiledCss, 'utf8');

  });
})
.catch(function(err){
  console.log('-----------------------');
  console.log(err);
  console.log('-----------------------');
  process.exit(1);
})
