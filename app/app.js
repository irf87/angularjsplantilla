(function() {
  'use strict';

  angular.module('app', [
    //Módulos de ángular
    'ngRoute',
    'ngSanitize',
    //------Modulos------
    'app.main',
    'app.star'
  ])
  .constant("URL", "https://swapi.co/api")
  .constant("PRODUCCION", false);

})();
