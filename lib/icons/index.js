import angular from 'angular'

import clockActive      from './svg/clock-active.svg!';
import clockDisabled    from './svg/clock-disabled.svg!';
import infoActive       from './svg/info-active.svg!';
import infoDisabled     from './svg/info-disabled.svg!';
import publishActive    from './svg/publish-active.svg!';
import publishDisabled  from './svg/publish-disabled.svg!';
import previewActive    from './svg/preview-active.svg!';

var templates = {
  'clock-active'      : clockActive,
  'clock-disabled'    : clockDisabled,
  'info-active'       : infoActive,
  'info-disabled'     : infoDisabled,
  'publish-active'    : publishActive,
  'publish-disabled'  : publishDisabled,
  'preview-active'    : previewActive
}

var icons = angular.module('guIcons', []);

icons.directive('guIcon', function icons(){
  return {
    restrict: 'E',
    template: function(el, attrs){
      return templates[attrs.type].outerHTML;
    }
  };
});

export default icons;
