import angular  from 'angular';
import icons    from '../icons';
import grid     from '../grid';
import btn      from '../btn';
import status   from '../status';
import box      from '../box';
import dropdown from '../dropdown';

var components = angular.module('gu-components', [
  'guIcons',
  'guGrid',
  'guBtn',
  'guStatus',
  'guBox',
  'guDropdown'
]);


export default components;
