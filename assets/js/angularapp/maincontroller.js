(function (module) {

    module.controller('maincontroller', ['$scope','$http',function ($scope,$http) {
       
        
        $http.get('/user/index').then(function (result) {
            $scope.users = result.data;
        });


    }]);
})(angular.module('ramtinapp'));