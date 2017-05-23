app.controller('listController', function($scope, $http) {
    $scope.$parent.hero = "All Users";

    $http.get("http://localhost:3000/api/users")
        .then(function (response) {
            $scope.users = response.data;
    });
});