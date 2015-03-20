import angular  from 'angular';
import box      from '../box/index';
import icons    from '../icons/index';

var dropdown = angular.module('guDropdown', ['guBox', 'guIcons']);

dropdown.directive('guDropdown', function dropdownDirective(){
  return {
    restrict: 'E',
    link: (scope, el, attrs)=> {
      console.log('yo');
    }
  };
});

dropdown.directive('guDropdownTrigger', function dropdownTriggerDirective(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<gu-box class="dropdown__trigger" variant="primary"><ng-transclude></ng-transclude><gu-icon class="dropdown__trigger__icon" variant="publish-active"></gu-icon></gu-box>'
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
