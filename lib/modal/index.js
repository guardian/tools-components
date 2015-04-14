import angular from 'angular';
import ModalCtrlMod from './ModalCtrl';

var modal = angular.module('guModal', ['ModalCtrlMod']);

modal.directive('guModal', function modalDirective(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      isOpen: '='
    },
    template: `<div class="modal" ng-class="{'open': isOpen }">
      <ng-transclude></ng-transclude>
    </div>`,
    controller: 'ModalCtrl'
  };
});

export default modal;
