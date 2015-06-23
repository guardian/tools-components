import angular  from 'angular';
import grid     from '../grid/index' ;
import box      from '../box/index' ;
import buttons  from '../btn/index';
import icons    from '../icons/index';

var errorBars = angular.module('guErrorBars', ['guGrid', 'guBox', 'guBtn', 'guIcons']);

errorBars.directive('guErrorBar', function errorBarsDirective(){
  return {

    restrict: 'E',
    replace: true,
    transclude: true,

    scope: {
      when: '='
    },

    template: (el, attrs) => (attrs.variant === 'warning')

      ? `<gu-row ng-show="when" class="gu-warning-bar" gu-box="warning">
          <gu-icon class="gu-warning-icon" variant="bang-active"></gu-icon>
          <ng-transclude></ng-transclude>
        </gu-row>`


      : `<gu-row ng-show="when" class="gu-error-bar" gu-box="error">
          <ng-transclude></ng-transclude>
          <gu-btn ng-click="hideElement()" size="small">${ attrs.acceptMessage || 'Understood' }</gu-btn>
        </gu-row>`,

    controller: [
      '$scope',
      function($scope){

        //if we click the button
        $scope.hideElement = function(){
          $scope.when = false;
        };

      }
    ]
  };
});

export default errorBars;
