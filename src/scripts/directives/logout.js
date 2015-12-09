angular
	.module('logoutDirective', [
		'dgmTodo.auth'
	])
	.directive('logout', [
		'auth',
		'$location',
		function (auth, $location) {
			return {
				restrict: 'AE',
				scope: {},
				template: '<a href="" ng-click="logoutClickHandler()">Logout</a>',
				link: function (scope, elem, attrs) {
					scope.logoutClickHandler = function () {
						auth.logout()
							.then(function () {
								$location.url('/login');
							});
					};
				}
			};
		}
	]);