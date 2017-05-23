var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {
    $scope.message = "Hello World!";

    $http.get("http://localhost:3000/api/users")
        .then(function (response) {
        $scope.users = response.data;
    });
});