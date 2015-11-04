angular
	.module('dgmTodo.auth', [
		'dgmTodo'
	])
	.factory('auth', [
		'$http',
		'dgmTodoHost',
		function ($http, host) {
			var auth = {
				login: function (user) {
					return $http
						.post(host + '/session', user);
				}
			};
			
			return auth;
		}
	]);