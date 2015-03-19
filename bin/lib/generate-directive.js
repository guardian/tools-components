import Q      from 'q';
import path   from 'path';
import fs     from 'fs';
import mkdirp from 'mkdirp';
import _      from 'lodash';
import capitalizeFirstChar from 'capitalize-first-char';

var pMkdirP    = Q.denodeify(mkdirp);
var pReadFile  = Q.denodeify(fs.readFile);
var pWriteFile = Q.denodeify(fs.writeFile);

module.exports = (componentName, directiveName) => {
  return Q.async(function* (){

    var directiveDirPath = path.resolve(__dirname, `../../lib/${componentName}`);

    //check if we already have a component
    if (fs.existsSync(directiveDirPath)) {
      console.log(`${directiveDirPath} exists`.red);
      process.exit(1);
    }

    //make the component directory
    yield pMkdirP(directiveDirPath);

    //get the template
    var templateFilePath = path.resolve(__dirname, '../templates/directive.tmpl');
    var templateData = yield pReadFile(templateFilePath, 'utf8');
    var template = _.template(templateData);
    //render the template
    template = template({
      componentName: componentName,
      directiveName: capitalizeFirstChar(componentName)
    });


    var directiveFilePath = path.resolve(directiveDirPath, 'index.js');
    yield pWriteFile(directiveFilePath, template, 'utf8');

    console.log(`${directiveFilePath} created`.green);


  })().done();
}
