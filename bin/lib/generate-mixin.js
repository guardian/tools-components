import Q from 'q';

export default (mixinName) => {

  return Q.async(function* (){
    try {
    }
    catch(e){
      console.log('-----------------------');
      console.log(e);
      console.log('-----------------------');
      process.exit(1);
    }

  })().done();

}
