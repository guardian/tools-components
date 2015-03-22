//vendor
import angular    from 'angular';
import router     from 'angular-route/angular-route';

//config
import routeData  from './config/routes.json!';

//controllers
import IconsCtrlMod   from './controllers/IconsCtrl';
import BoxCtrlMod     from './controllers/BoxCtrl';
import BtnCtrlMod     from './controllers/BtnCtrl';

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

