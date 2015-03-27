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
      <ol ng-transclude></ol>
    </div>`
  };
});

snapshotList.directive('guSnapshotListItem', function snapshotListItemDirective(){
  return {
    restrict: 'E',
    scope: {
      href: '@',
      created: '@'
    },
    template: `<li class="snapshots-list__items">
      <div gu-box="tertiary">{{created}}</div>
      <div gu-box="tertiary"><a href="{{href}}">JSON</a></div>
      <div gu-box="tertiary">
        <gu-btn>
          <gu-icon variant="publish-active"></gu-icon>
          Restore
        </gu-btn>
      </div>
    </li>`
  }
})

export default snapshotList;
