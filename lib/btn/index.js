import angular from 'angular';
import css from './btn.css!';

var btn = angular.module('gu-btn', []);

btn.directive('guBtn', function btnDirective(){
  return {
    restrict: 'E'
  };
});

export default btn;
