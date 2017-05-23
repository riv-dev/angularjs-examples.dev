var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "home.html",
    controller: "homeController"
  })
  .when("/users", {
    templateUrl: "list.html",
    controller: "listController"
  })

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});