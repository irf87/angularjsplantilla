(function(){

  angular
    .module('app')
    .factory('HttpReqFactory', HttpReqFactory);

  HttpReqFactory.$inject = ['$q', '$http', '$timeout', 'URL'];

  function HttpReqFactory($q, $http, $timeout, URL) {
    var iTimeOut = 6500;
    
    return {
      httpRequest : httpRequest
    };


    function httpRequest(type,params = {}){
      var sUrl = URL;
      var q = $q.defer();
      switch(type){

        case 'getPlanetas':
          sUrl += '/planets/';
          q.resolve(request('GET', sUrl , {} ));
        break;

        default:
          q.reject({error : 'Acción no valida'});
        break;
      };

      return q.promise;
    }

    function request(metodo,url,params){
      var aplazar = $q.defer();
      var aplazarTimeout = $q.defer();
      var tiempoTerminado = false;
      
      var opcRequest = {
        method : metodo,
        url : url,
        headers: {},
        timeout : aplazarTimeout.promise
      };

      if(metodo == 'DELETE'){
        opcRequest["data"] =  $.param(params);
        opcRequest["headers"]["Content-Type"] = 'application/x-www-form-urlencoded';
      }

      else opcRequest["data"] =  params;
      
      var peticionHTTP = $http(opcRequest);

        peticionHTTP.success(function(data){
            aplazar.resolve(data);
        });

        peticionHTTP.error(function(data){
            if (tiempoTerminado){
              aplazar.reject({error: 'Transcurrió el tiempo máximo de espera, verifique su conexión a internet'});
            }
            else if (data !== null){
              aplazar.reject(data);
            }
            else {
              console.log("3");
              aplazar.reject({error: 'Favor de habilitar su conexión a internet y pruebe nuevamente', resp: data});
            }
        });

        $timeout(function(){
            tiempoTerminado = true;
            aplazarTimeout.resolve();
        }, iTimeOut);

        return aplazar.promise;
    }

    function transformObject(object){
      var oAux = JSON.stringify(object);
      oAux = JSON.parse(oAux);
      return oAux;
    }

  }
})();
