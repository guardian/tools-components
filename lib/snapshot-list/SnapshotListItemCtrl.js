import angular  from 'angular';
import moment   from 'moment';

var snapshotListItemCtrlMod = angular.module('SnapshotListItemCtrlMod', []);

var snapshotListItemCtrl = snapshotListItemCtrlMod.controller('SnapshotListItemCtrl', [
  '$scope',
  function($scope){
    var createdTime = moment(this.created);
    $scope.createdDate = createdTime.format('h:mm:ss D MMMM YYYY');
    $scope.relativeTime = createdTime.fromNow();
    $scope.index = this.index;
  }
]);

export default snapshotListItemCtrlMod;
