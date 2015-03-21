import angular from 'angular';

var directivesModule = angular.module('appDemo', []);

directivesModule.directive('appDemo', function(){
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: (el, attrs)=> [
      '<div>',
        '<ng-transclude></ng-transclude>',
      '</div>'
    ].join(''),
    link: ()=> {
      console.log('demo')
    }
  }
})

export default directivesModule;
