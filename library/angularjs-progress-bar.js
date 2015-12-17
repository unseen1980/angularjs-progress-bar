angular.module("progressBar", [])
  .directive('progressBar', [function() {
    return {
      restrict: 'AE',
      scope: {
        'prvalue': '@',
        'prmax': '=',
        'prloading': '='
      },
      replace: true,
      template: '<progress></progress>',
      link: function(scope, element, attrs) {
        element.attr('max', scope.prmax);
        if (!scope.prloading) {
          scope.$watch('prvalue', function(newVal) {
            element.attr('value', newVal);
          })
        }
        element.addClass('html5');
      }
    }
  }]);
