import Q    from 'q';
import path from 'path';
import fs   from 'fs';
import _    from 'lodash';

var pReadFile  = Q.denodeify(fs.readFile);
var pWriteFile = Q.denodeify(fs.writeFile)

module.exports = (componentName) => {
  return Q.async(function* (){

    try{

    console.log(`Generating ./${componentName}.js`.green);

    var bootstrapFilePath = path.resolve(__dirname, `../../${componentName}.js`);

    if (fs.existsSync(bootstrapFilePath)) {
      console.log(`${bootstrapFilePath} already exists`.red);
      process.exit(1);
    }

    var templatePath = path.resolve(__dirname, '../templates/bootstrap.tmpl');
    var templateData = yield pReadFile(templatePath, 'utf8');
    var template = _.template(templateData);
    template = template({
      componentName: componentName
    });

    var bootstrapOutputFilePath = path.resolve(__dirname, `../../${componentName}.js`);
    yield pWriteFile(bootstrapOutputFilePath, template, 'utf8');
    console.log(`${bootstrapFilePath} created`.green);

    }
    catch (e) {
      console.log('-----------------------');
      console.log(e);
      console.log('-----------------------');
      process.exit(1);
    }

  })().done();
}
