import angular from 'angular';

var ModalCtrlMod = angular.module('ModalCtrlMod', []);

var ModalCtrl = ModalCtrlMod.controller('ModalCtrl', [
  '$scope',
  '$attrs',
  function($scope, attrs){
    $scope.$watch('state', function(val){
      console.log('change', val);
      $scope.isOpen = !!val;
    });
  }
]);

export default ModalCtrlMod;
