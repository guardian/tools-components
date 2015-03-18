import angular  from 'angular';
import icons    from './icons/index';
import grid     from './grid/index';
import btn      from './btn/index';

var components = angular.module('gu-components', [
  'gu-icons',
  'gu-grid',
  'gu-btn'
]);


export default components;
