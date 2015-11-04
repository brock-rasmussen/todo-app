angular
	.module('dgmTodo.users', [
		'dgmTodo'
	])
	.factory('users', [
		'$http',
		'dgmTodoHost',
		function ($http, host) {
			var users = {
				create: function (user) {
					return $http
						.post(host + '/users', user);
				}
			};
			
			return users;
		}
	]);