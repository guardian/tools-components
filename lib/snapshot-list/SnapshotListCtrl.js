import angular from 'angular';

var snapshotListCtrlMod = angular.module('SnapshotListCtrlMod', []);

var snapshotListCtrl = snapshotListCtrlMod.controller('SnapshotListCtrl', [
  '$scope',
  function($scope){
    console.log('-----------------------');
    console.log('init', this, $scope);
    console.log('-----------------------');
  }
]);

export default snapshotListCtrlMod;
