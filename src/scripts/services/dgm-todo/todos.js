angular
	.module('dgmTodo.todos', [
		'dgmTodo'
	])
	.factory('todos', [
		'$http',
		'dgmTodoHost',
		function ($http, host) {
			'use strict';
			
			return {
				create: function (userId, data) {
					return $http
						.post(host + '/users/' + userId + '/todos', data)
						.then(function (res) {
							return res.data;
						});
				},
				read: function (userId) {
					return $http
						.get(host + '/users/' + userId + '/todos')
						.then(function (res) {
							return res.data;
						});
				},
				update: function (userId, id, data) {
					return $http
						.put(host + '/users/' + userId + '/todos/' + id, data)
						.then(function (res) {
							return res.data;
						});
				},
				delete: function (userId, id) {
					return $http
						.delete(host + '/users/' + userId + '/todos/' + id)
						.then(function (res) {
							return res.data;
						});
				}
			};
		}]);