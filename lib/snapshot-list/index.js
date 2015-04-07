import angular        from 'angular';
import moment         from 'moment';
import icons          from '../icons/index';
import boxes          from '../box/index';
import snapshotList   from './snapshot-list.html!text';
import listItem       from './snapshot-list__item.html!text';
import itemCtrlMod    from './SnapshotListItemCtrl';

var snapshotListMod = angular.module('guSnapshotList', [
  'guIcons',
  'SnapshotListItemCtrlMod'
]);

snapshotListMod.directive('guSnapshotList', function snapshotListDirective(){
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: snapshotList
  };
});

snapshotListMod.directive('guSnapshotListItem', function snapshotListItemDirective(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      active: '@'
    },
    template: listItem,
    controller: 'SnapshotListItemCtrl'
  }
});

export default snapshotListMod;
