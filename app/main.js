//vendor
import angular    from 'angular';
import router     from 'angular-route/angular-route';

//config
import routeData  from './config/routes.json!';

//controllers
import IconsCtrlMod   from './controllers/IconsCtrl';

//app
import components from '../lib/gu-components';
import directives from './directives/index';

var app = angular.module('gu-components-app', [
  'ngRoute',
  'guComponents',
  'appDirectives',
  'IconsCtrlMod',
]);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider.when('/icons', {
    templateUrl: 'app/templates/icons.html',
    controller: 'IconsCtrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });

}]);

