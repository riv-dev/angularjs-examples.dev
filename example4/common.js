var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.message = "Hello World!";

    $scope.users = [
        {firstname: "Ken", lastname: "Le", admin: "false"},
        {firstname: "Nguyen", lastname: "Dao", admin: "false"},
        {firstname: "Phung", lastname: "Nguyen", admin: "true"}
    ];

    $scope.addUser = function() {
        $scope.users.push({firstname: $scope.newFirstname, lastname: $scope.newLastname})
    };
});