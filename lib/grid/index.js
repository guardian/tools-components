import angular from 'angular';
import css from './grid.css!'

var grid = angular.module('grid', []);

// COLUMN
// ------------------------
grid.directive('column', function column(){
  return {
    restrict: 'E',
    link: (scope, el, attrs)=> {
      var className = `col-${attrs.span}`;
      el.addClass(className);
    }
  };
});


// ROW
// ------------------------
grid.directive('row', function column(){
  return {
    restrict: 'E',
    link: (scope, el)=> {
      el.addClass('row');
    }
  };
});


export default grid;
