(function() {
  'use strict';

  angular
    .module('app.star')
    .controller('StarCtrl', StarCtrl);

  StarCtrl.$inject = ['HttpReqFactory'];

  function StarCtrl(HttpReqFactory) {
    var vm = this;
    
    //---------Variables---------//
    vm.planets_array = [];

    //---------Declaraciones para funciones de angular-----//
    vm.getPlanets = getPlanets;
    vm.leer = leer;

    //---------Funciones iniciales---------//
    initFun();

    //---------Eventos----------//
    function getPlanets(){
      HttpReqFactory.httpRequest('getPlanetas').then(success,error);
    }

    function leer(){
      alert(vm.miPlaneta);
    }

    //---------Funciones auxiliares

    function initFun(){
      console.log("Ha iniciado el controlador Star Wars");
    }

    function success(dataSuccess){
      if(dataSuccess.results) vm.planets_array = dataSuccess.results;
    }

    function error(dataError){
      alert("No se pudo conseguir los planetas");
    }

  }

})();