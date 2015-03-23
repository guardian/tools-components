import angular from 'angular';

var DropdownCtrlMod = angular.module('guDropdownCtrl', []);

var DropdownCtrl = DropdownCtrlMod.controller('guDropdownCtrl', [
  '$scope',
  function DropdownCtrl(scope){

      function getClassName() {
        return scope.state === 'open' ? 'dropdown open' : 'dropdown closed';
      }

      function assignClass() {
        scope.className = getClassName();
      }

      this.onTriggerClicked = function onTriggerClicked() {
        //toggle state
        scope.state = (scope.state === 'open') ? 'closed' : 'open';
        assignClass();
      }

      //assign the starting class
      assignClass();
  }
])
