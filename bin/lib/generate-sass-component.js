import Q      from 'q';
import path   from 'path';
import fs     from 'fs';
import _      from 'lodash';

var pReadFile  = Q.denodeify(fs.readFile);
var pWriteFile = Q.denodeify(fs.writeFile);

export default (componentName, mixinName) => {
  return Q.async(function* (){
    try{

      //tell the user whats going on
      console.log(`Generating sass/components/${componentName}.scss`.green);

      //check if the component already exists
      let sassComponentName = path.resolve(__dirname, '../../sass/components/', componentName + '.scss');
      if (fs.existsSync(sassComponentName)) {
        console.log(`${sassComponentName} exists`.red);
        process.exit(1);
      }

      let templatePath = path.resolve(__dirname, '../templates/sass-component.tmpl');
      let template = yield pReadFile(templatePath, 'utf8');
      template = _.template(template);
      //compile the template
      let fileData = template({
        componentName: componentName,
        mixinName: mixinName
      });

      yield pWriteFile(sassComponentName, fileData, 'utf8');

      console.log(`${sassComponentName} created`.green);


    }
    catch(e){
      console.log('-----------------------');
      console.log(e);
      console.log('-----------------------');
      process.exit(1);
    }
  })().done();
}
