import angular from 'angular';
import box from '../box/index';

var pageLabel = angular.module('guPageLabel', ['guBox']);

pageLabel.directive('guPageLabel', function pageLabelDirective(){
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: (el, attrs) => `<gu-box variant="secondary" class="page-label" ng-class="{ open: isOpen }" ng-mouseover="isOpen = true", ng-mouseleave="isOpen = false">
      <div class="page-label__content" ng-transclude></div>
      <div class="page-label__hover">${attrs.hoverMessage || 'Back to dashboard'}</div>
    </gu-box>`
  };
});

export default pageLabel;
