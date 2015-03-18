import angular from 'angular';
import css from './btn.css!';

var btn = angular.module('gu-btn', []);

var templates = {
  'anchor': '<a class="{{className}}" ng-transclude=true></a>',
  'button': '<button class="{{className}}" ng-transclude=true></button>',
}

btn.directive('guBtn', function btnDirective(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: function (el, attrs) {
      return attrs.href ? templates.anchor : templates.button;
    },
    scope: {
      variant: "@",
      size: "@"
    },
    link: function (scope, el, attrs) {
      var className = 'btn';
      if (scope.variant) {
        className = `btn--${scope.variant}`;
      }
      if (scope.size) {
        className += ` btn--${scope.size}`;
      }

      scope.className = className;
      console.log('-----------------------');
      console.log(className);
      console.log('-----------------------');
    }
  };
});

export default btn;
