(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$location'];

  function MainCtrl($location) {
    var vm = this;
    
    //---------Variables---------//
    var titulo = 'Hola mundo';
    vm.tituloCabecera = "Estas en el main controler";

    //---------Declaraciones para funciones de angular-----//
    vm.evento = evento;
    vm.goTo = goTo;

    //---------Funciones iniciales---------//
    initFun();

    //---------Eventos----------//

    //---------Funciones auxiliares

    function initFun(){
      console.log("Ha iniciado el controlador");
      console.log(titulo);
    }

    function evento(){
      alert("Hola mundo");
    }

    function goTo(){
      $location.path("/star");
    }

  }

})();