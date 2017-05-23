var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.message = "Hello World!";

    $scope.users = [
        {firstname: "Ken", lastname: "Le"},
        {firstname: "Nguyen", lastname: "Dao"},
        {firstname: "Phung", lastname: "Nguyen"}
    ];
});