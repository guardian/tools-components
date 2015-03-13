import angular from 'angular';
import css from './grid.css!'

var grid = angular.module('gu-grid', []);

// COLUMN
// ------------------------
grid.directive('guColumn', function columnDirective(){
  return {
    restrict: 'E',
    link: (scope, el, attrs)=> {
      console.log('LINK');
      var className = `col-${attrs.span}`;
      el.addClass(className);
    }
  };
});


// ROW
// ------------------------
grid.directive('guRow', function rowDirective(){
  return {
    restrict: 'E',
    link: (scope, el)=> {
      el.addClass('row');
    }
  };
});


export default grid;
