angular
	.module('todoApp', [
		'ngRoute',
		'LoginController'
	])
	.config([
		'$routeProvider',
		function ($routeProvider) {
			'use strict';
			$routeProvider
				.when('/login', {
					templateUrl: '/partials/login-controller.html',
					controller: 'LoginController',
					controllerAs: 'login'
				})
				.otherwise('/login');
		}]);