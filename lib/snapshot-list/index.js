import angular        from 'angular';
import moment         from 'moment';
import icons          from '../icons/index';
import boxes          from '../box/index';
import snapshotList   from './snapshot-list.html!text';
import listItem       from './snapshot-list__item.html!text';
import listItemActive from './snapshot-list__item--active.html!text';
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
    template: snapshotList,
    link: function(scope, el, attrs){
      //loop through all children,
      //calculate the time difference between each child
      //assign it.
      var children = el.find('ol').children();
      for(var i = 0; i <= children.length; i++){

        var child             = angular.element(children[i]);
        var nextChild         = angular.element(children[i + 1]);

        if (!child.length) {
          return;
        }
        //assign the opposite index
        child.data().$isolateScope.index = (children.length - i);

        if (!nextChild.length) {
          return;
        }

        var childCreated      = child.attr('created');
        var nextChildCreated  = nextChild.attr('created');
        var deltaTime = moment(childCreated).from(moment(nextChildCreated), true);
        var data = child.data();

        if (!data) {
          return;
        }
        //utter filth jp 31-04-2015
        child.data().$isolateScope.deltaTime = deltaTime;
      }
    }
  };
});

snapshotListMod.directive('guSnapshotListItem', function snapshotListItemDirective(){
  return {
    restrict: 'E',
    scope: {
      created: '@',
      index: '@',
      restoreHref: '@',
      jsonHref: '@'
    },
    controller: 'SnapshotListItemCtrl',
    template: (el, attrs) => attrs.active ? listItemActive : listItem
  }
});

export default snapshotListMod;
