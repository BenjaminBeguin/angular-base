// app.js

// define our application and pull in ngRoute
var app = angular.module('app', ['ngRoute']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        // about page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })

        .otherwise({'redirectTo':'/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});


// CONTROLLERS ============================================
// main controller
app.controller('mainCtrl', function($scope, $location) {

    // Active link menu
    $scope.$on('$routeChangeStart', function(next, current) { 
        $scope.currentUrl = $location.path();
    });
});

// home page controller
app.controller('homeCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-home';
    $rootScope.pageTitle = 'Angular base - home';
});

// about page controller
app.controller('aboutCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-about';
    $rootScope.pageTitle = 'Angular base - about';
});

$(document).ready(function() {

});
