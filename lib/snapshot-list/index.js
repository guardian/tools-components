import angular        from 'angular';
import icons          from '../icons/index';
import boxes          from '../box/index';
import snapshotList   from './snapshot-list.html!text';
import listItem       from './snapshot-list__item.html!text';
import listItemActive from './snapshot-list__item--active.html!text';
import ctrlMod        from './SnapshotListCtrl';
import itemCtrlMod    from './SnapshotListItemCtrl';

var snapshotListMod = angular.module('guSnapshotList', [
  'guIcons',
  'SnapshotListCtrlMod',
  'SnapshotListItemCtrlMod'
]);

snapshotListMod.directive('guSnapshotList', function snapshotListDirective(){
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: snapshotList,
    controller: 'SnapshotListCtrl',
    controllerAs: 'ctrl',
    bindToController: true
  };
});

snapshotListMod.directive('guSnapshotListItem', function snapshotListItemDirective(){
  return {
    restrict: 'E',
    scope: {
      href: '@',
      created: '@',
      index: '@'
    },
    controller: 'SnapshotListItemCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    template: (el, attrs) => attrs.active ? listItemActive : listItem
  }
});

export default snapshotListMod;
