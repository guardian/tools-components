import angular  from 'angular';
import icons    from '../icons';
import grid     from '../grid';
import btn      from '../btn';
import status   from '../status';
import box      from '../box';

var components = angular.module('gu-components', [
  'guIcons',
  'guGrid',
  'guBtn',
  'guStatus',
  'guBox'
]);


export default components;
