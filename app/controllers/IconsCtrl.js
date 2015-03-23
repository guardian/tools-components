import angular from 'angular';

var IconsCtrlMod = angular.module('IconsCtrlMod', []);


var IconsCtrl = IconsCtrlMod.controller('IconsCtrl', [
  '$scope', ($scope) => {
  $scope.message = 'test';
}]);

export default IconsCtrlMod;
