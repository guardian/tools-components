import angular  from 'angular';
import box      from '../box/index';
import icons    from '../icons/index';

var dropdown = angular.module('guDropdown', ['guBox', 'guIcons']);

dropdown.directive('guDropdown', function dropdownDirective(){
  return {
    restrict: 'E',
    link: (scope, el, attrs)=> {

      //this should maybe in a template
      el.addClass('dropdown')

      //I would really 100% rather manipulate the scope to add these class
      //however when using scope within the dropdowItem classname like class="dropdown__open {{ isHidden }}"
      //the guBox fails to assign the class :(
      if (attrs.state === 'open') {
        el.removeClass('closed');
      } else {
        el.addClass('closed');
      }

      //when the dropdown trigger is clicked
      scope.onTriggerClicked = function(){
        //toggle the className
        el.toggleClass('closed');
      }
    }
  };
});

dropdown.directive('guDropdownTrigger', function dropdownTriggerDirective(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: (el, attrs) => [
      '<gu-box ng-click="onTriggerClicked(this)" class="dropdown__trigger" variant="primary">',
        '<ng-transclude></ng-transclude>',
        `<gu-icon class="dropdown__trigger__icon" variant="${ attrs.icon || 'publish-active' }"></gu-icon>`,
      '</gu-box>'
    ].join('')
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
