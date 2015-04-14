import angular from 'angular';
import safeApply from '../utils/safe-apply';

var ModalCtrlMod = angular.module('ModalCtrlMod', []);

var ModalCtrl = ModalCtrlMod.controller('ModalCtrl', [
  '$scope',
  '$attrs',
  function($scope, attrs){

    window.addEventListener('keydown', function(e){
      if ($scope.isOpen && e.keyCode === 27) {
        safeApply($scope, ()=> $scope.isOpen = false);
      }
    });

  }
]);

export default ModalCtrlMod;
