app.directive('comicItem', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=' 
      }, 
      templateUrl: 'js/directives/comic-item.html' 
    }; 
});