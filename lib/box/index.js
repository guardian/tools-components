import angular from 'angular';

var box = angular.module('guBox', []);

box.directive('guBox', function boxDirective(){
  return {
    restrict: 'AE',
    link: function(scope, el, attrs) {
      var boxType = attrs.variant || attrs.guBox;
      var className = `box--${boxType}`;
      el.addClass(className);
    }
  };
});

export default box;
