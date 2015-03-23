//vendor
import angular    from 'angular';
import router     from 'angular-route/angular-route';

//config
import routeData  from './config/routes.json!';

//controllers
import IconsCtrlMod     from './controllers/IconsCtrl';
import BoxCtrlMod       from './controllers/BoxCtrl';
import BtnCtrlMod       from './controllers/BtnCtrl';
import GridCtrlMod      from './controllers/GridCtrl';
import StatusCtrlMod    from './controllers/StatusCtrl';
import DropdownCtrlMod  from './controllers/DropdownCtrl';

//app
import components from '../lib/gu-components';
import directives from './directives/index';

var app = angular.module('gu-components-app', [
  'ngRoute',
  'guComponents',
  'appDirectives',
  'IconsCtrlMod',
  'BoxCtrlMod',
  'BtnCtrlMod',
  'GridCtrlMod',
  'StatusCtrlMod',
  'DropdownCtrlMod'
]);

app.config(['$routeProvider', function($routeProvider){

  routeData.forEach((data)=>{
    $routeProvider.when(data.slug, {
      templateUrl: data.template,
      controller: data.ctrl
    })
  })

  $routeProvider.otherwise({
    redirectTo: '/'
  });

}]);

