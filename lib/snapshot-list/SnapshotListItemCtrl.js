import angular  from 'angular';

var snapshotListItemCtrlMod = angular.module('SnapshotListItemCtrlMod', []);

var snapshotListItemCtrl = snapshotListItemCtrlMod.controller('SnapshotListItemCtrl', [
  '$scope',
  function($scope){
    var createdTime = moment(this.created);
    console.log(createdTime.fromNow());
  }
]);

export default snapshotListItemCtrlMod;
