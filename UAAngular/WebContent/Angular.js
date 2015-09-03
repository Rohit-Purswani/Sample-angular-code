
    var myApp  =  angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http){
	$scope.manager = [];
    $http.get('sample-data.json').success(function (data){
        $scope.manager = data;});
        $scope.pageSize = 10;
        $scope.currentPage = 0;

        $scope.numberOfPages = function () {
            return Math.ceil($scope.manager.length / $scope.pageSize);
        }
        $scope.getTotalRecord    =   function(){
            return $scope.manager.length;    
        }
        $scope.title = "Details";
        $scope.editorE = false;
        
        $scope.enableEditor = function(item) {
          $scope.editorE = true;
          $scope.resource = item;
        }
        
    });
  	myApp.filter('startFrom', function () {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
        
    });
  	
    


