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
