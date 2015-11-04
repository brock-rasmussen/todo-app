angular
	.module('toggleDirective', [])
	.directive('toggle', function () {
		return {
			replace: true,
			restrict: 'AE',
			scope: {
				value: '='
			},
			templateUrl: 'partials/toggle-directive.html',
			link: function (scope, elem, attrs) {
				scope.active = attrs.active;
				scope.inactive = attrs.inactive;
			}
		};
	});