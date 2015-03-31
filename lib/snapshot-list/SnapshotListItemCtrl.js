import angular  from 'angular';
import moment   from 'moment';

var snapshotListItemCtrlMod = angular.module('SnapshotListItemCtrlMod', []);

var snapshotListItemCtrl = snapshotListItemCtrlMod.controller('SnapshotListItemCtrl', [
  '$scope',
  function($scope){
    var createdTime = moment($scope.created);
    $scope.createdDate = createdTime.format('h:mm:ss D MMMM YYYY');
    $scope.relativeTime = createdTime.fromNow();
  }
]);

export default snapshotListItemCtrlMod;
