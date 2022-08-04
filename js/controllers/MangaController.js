app.controller('MangaController', ['$scope','$routeParams', function($scope, $routeParams) {
    $scope.email = $routeParams.id;
}]);