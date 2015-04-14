import angular   from 'angular';
import icons     from '../icons';
import grid      from '../grid';
import btn       from '../btn';
import status    from '../status';
import box       from '../box';
import dropdown  from '../dropdown';
import pageLabel from '../page-label';
import indexList from '../index-list';
import loadingBars from '../loading-bars';

var components = angular.module('guComponents', [
  'guIcons',
  'guGrid',
  'guBtn',
  'guStatus',
  'guBox',
  'guDropdown',
  'guPageLabel',
  'guIndexList',
  'guLoadingBars',
]);


export default components;
