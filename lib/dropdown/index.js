import angular  from 'angular';
import box      from '../box/index';
import icons    from '../icons/index';

var dropdown = angular.module('guDropdown', ['guBox', 'guIcons']);

dropdown.controller('guDropdownCtrl', [
  '$scope', function dropdownController(scope){

      function getClassName() {
        return scope.state === 'open' ? 'dropdown open' : 'dropdown closed';
      }

      function assignClass() {
        scope.className = getClassName();
      }

      function onTriggerClicked() {
        //toggle state
        scope.state = (scope.state === 'open') ? 'closed' : 'open';
        assignClass();
      }

      //when the dropdown trigger is clicked
      this.onTriggerClicked = onTriggerClicked;

      //assign the starting class
      assignClass();
  }
])

dropdown.directive('guDropdown', function dropdownDirective(){
  return {
    transclude: true,
    template: '<div class={{className}} ng-transclude></div>',
    restrict: 'E',
    scope: { state: '@' },
    controller:'guDropdownCtrl'
  };
});

dropdown.directive('guDropdownTrigger', function dropdownTriggerDirective(){
  return {
    require: '^guDropdown',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: (el, attrs) => [
      '<gu-box ng-click="onTriggerClicked()" class="dropdown__trigger" variant="primary">',
        '<ng-transclude></ng-transclude>',
        `<gu-icon class="dropdown__trigger__icon" variant="${ attrs.icon || 'arrow-down' }"></gu-icon>`,
      '</gu-box>'
    ].join(''),
    link: function(scope, el, attrs, ctrl){
      scope.onTriggerClicked = ctrl.onTriggerClicked;
    }
  }
});

dropdown.directive('guDropdownItem', function dropdownItemDirective(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<gu-box class="dropdown__item" variant="tertiary" ng-transclude></gu-box>'
  }
});

export default dropdown;
