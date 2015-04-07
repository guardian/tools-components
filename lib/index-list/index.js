import angular from 'angular';

var indexList = angular.module('guIndexList', []);

indexList.directive('guIndexList', function indexListDirective(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: `<ol class="index-list" ng-transclude></ol>`
  };
});

indexList.directive('guIndexListItem', function indexListItemDirective(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: { index: '@' },
    template: (el, attrs) => `<li class="index-list__item index-list__item--${attrs.variant}">
      <div class="index-list__item__index">{{index}}</div>
      <ng-transclude></ng-transclude>
    </li>`
  }
})

export default indexList;
