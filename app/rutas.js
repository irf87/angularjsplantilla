(function () {

  angular
    .module('app')
    .config(routeConfigurator);

  routeConfigurator.$inject = ['$routeProvider', '$provide'];

  function routeConfigurator($routeProvider, $provide) {    
    
    $routeProvider.
      when('/', {
        templateUrl: 'app/views/mainView.html',
        controller: 'MainCtrl as vm'
      }).
      when('/star', {
        templateUrl: 'app/views/starWars.html',
        controller: 'StarCtrl as vm'
      }).
      otherwise({
        redirectTo: '/'
      });
  }


})();
