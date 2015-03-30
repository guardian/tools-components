import angular        from 'angular';
import icons          from '../icons/index';
import boxes          from '../box/index';
import snapshotList   from './snapshot-list.html!text';
import listItem       from './snapshot-list__item.html!text';
import listItemActive from './snapshot-list__item--active.html!text';

var snapshotListMod = angular.module('guSnapshotList', ['guIcons']);

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
    scope: {
      href: '@',
      created: '@',
      index: '@'
    },
    template: (el, attrs) => attrs.active ? listItemActive : listItem
  }
});

export default snapshotListMod;
