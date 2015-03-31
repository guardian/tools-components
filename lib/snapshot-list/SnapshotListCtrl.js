import angular from 'angular';

var snapshotListCtrlMod = angular.module('SnapshotListCtrlMod', []);

var snapshotListCtrl = snapshotListCtrlMod.controller('SnapshotListCtrl', [
  '$scope',
  '$element',
  function($scope, el){

    var childCount = el.find('ol').children().length;
    var count = 0;

    this.getIndex = function(){
      console.log('working');
      var index = childCount - count;
      count += 1;
      return index;
    }

  }
]);

export default snapshotListCtrlMod;
