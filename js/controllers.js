/*global angular */

var weatherControllers = (function () {
    var weatherControllers = angular.module('weatherControllers', []);

    // Declare the application controller and inject the scope reference.
    weatherControllers.controller('AppCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {
        // Define the title model.
        $scope.title = "AngularJS Tutorial";
        $scope.temp = {
          val : 'fahrenheit'
        };

      // Define the forecast data.            
        weatherService.getWeather($scope);
        // weatherService.formatWeather($scope);  
    }]);
    // Inject the scope and new weatherService reference into the controller.
    weatherControllers.controller('ListCtrl', ['$scope', 'weatherService',
                                  function ($scope, weatherService) {
                                      // Call another controller.         
                                      weatherService.doSomething($scope);
                                  }]);
    // Inject the scope and new weatherService reference into the controller.
    weatherControllers.controller('WeatherCtrl', ['$scope', 'weatherService',
                                  function ($scope) {

                                    $scope.getTemp = function(val, temp){
                                      if(temp == 'fahrenheit'){
                                        return Math.round(val* 9 / 5 + 32);
                                      }else{
                                        return Math.round((val - 32) * 5/9);
                                      }
                                    };

                                  }]);

    weatherControllers.controller('WeatherCityCtrl', ['$scope', '$routeParams','weatherService', 
                                  function ($scope, $routeParams, weatherService) {

                                    $scope.city = $routeParams.cityName;

                                    $scope.getTemp = function(val, temp){
                                      if(temp == 'fahrenheit'){
                                        return Math.round(val* 9 / 5 + 32);
                                      }else{
                                        return Math.round((val - 32) * 5/9);
                                      }
                                    };
                                  }]);


    return weatherControllers;
}());
