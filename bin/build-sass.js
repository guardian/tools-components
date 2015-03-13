#!/usr/bin/env node
//get es6 joy times

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


var defaults = {
  importer: function(url, prev, done){
    //if we are trying to import a json file
    if (/json$/.test(url)) {

      var path = require('path');
      filePath = path.resolve(__dirname, '../config/', url);

      //get the json
      var json = fs.readFileSync(filePath).toString();
      content = JSON.parse(json);

      //parse it into a sass format
      content = Object.keys(content)
        .reduce(function(last, key){
          var val = content[key];
          var result = '$' + key + ': ' + val + ';\n';
          return last += result;
        }, '');

      //pass it back to lib sass
      return {contents: content};
    }

    return { file: url };
  }
}

var options = process.env.NODE_ENV === 'development'
//dev sass options
  ? {}
  //production sass options
    : {}

    //merge all the options together
    options = _.extend({}, defaults, options);

    var path = process.cwd() + '/lib/**/*.scss';

    _glob(path)
    .then(function(files){
      files.forEach(function(filePath){
        //sub out scss for css
        var outputFilePath = filePath.replace(/scss$/, 'css');
        //get sass content
        var sassContent = fs.readFileSync(filePath).toString();

        options.data = sassContent;

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
