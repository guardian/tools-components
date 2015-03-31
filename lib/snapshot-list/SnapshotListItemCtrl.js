import angular  from 'angular';
import moment   from 'moment';

var snapshotListItemCtrlMod = angular.module('SnapshotListItemCtrlMod', []);

var snapshotListItemCtrl = snapshotListItemCtrlMod.controller('SnapshotListItemCtrl', [
  '$scope',
  '$attrs',
  function($scope, $attrs){
    var createdTime = moment($scope.created);
    $scope.createdDate = createdTime.format('h:mm:ss D MMMM YYYY');
    $scope.relativeTime = createdTime.fromNow();
    $scope.showDetails = false;
  }
]);

export default snapshotListItemCtrlMod;
