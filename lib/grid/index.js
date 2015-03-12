import angular from 'angular';

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
    link: ()=> {
      el.addClass('row');
    }
  };
});


export default grid;
