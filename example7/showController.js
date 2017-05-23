app.controller('showController', function($scope, $http, $routeParams) {
    $scope.$parent.hero = "User Details";

    $http.get("http://localhost:3000/api/users/"+$routeParams.user_id)
        .then(function (response) {$scope.user = response.data;}
    );
});