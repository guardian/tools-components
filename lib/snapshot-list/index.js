import angular from 'angular';
import icons   from '../icons/index';
import boxes   from '../box/index';

var snapshotList = angular.module('guSnapshotList', []);

snapshotList.directive('guSnapshotList', function snapshotListDirective(){
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: `<div class="snapshot-list">
      <div class="snapshot-list__header">
        <div class="snapshot-list__header__decal"><h4>No.</h4></div>
        <div class="snapshot-list__header__content"><h4>Snapped At</h4></div>
      </div>
      <ol class="snapshot-list__items" ng-transclude></ol>
    </div>`
  };
});

snapshotList.directive('guSnapshotListItem', function snapshotListItemDirective(){
  return {
    restrict: 'E',
    scope: {
      href: '@',
      created: '@',
      index: '@'
    },
    template: `<li class="snapshot-list__item">
      <div class="snapshot-list__item__index">
        <h4>{{ index }}</h4>
      </div>
      <div class="snapshot-list__item__content">
        <h4>4 mins 45 sec ago</h4>
        <h6>14:47:07 4 March 2015</h6>
      </div>
    </li>`
  }
})

export default snapshotList;
