angular
	.module('TodosController', [
		'dgmTodo.auth',
		'dgmTodo.todos'
	])
	.controller('TodosController', [
		'auth',
		'$location',
		'todos',
		function (auth, $location, todos) {
			var self = this;
			
			auth.isLoggedIn().then(function (currentUser) {
				if (!currentUser) {
					$location.url('/login');
				} else {
					self.currentUser = currentUser;
					readTodos();
				}
			});
			
			function readTodos() {
				todos.read(self.currentUser.id)
					.then(function (todoItems) {
						self.todos = todoItems;
					});
			}
			
			function resetCreateForm() {
				self.create = {
					name: '',
					description: '',
					tags: ''
				};
			}
			resetCreateForm();
			
			self.createTodo = function (data) {
				var todo = {
					name: data.name,
					description: data.description,
					tags: (data.tags || '')
						.split(',')
						.map(function (tag) {
							return tag.trim();
						})
						.filter(function (tag) {
							return tag;
						})
				};
				
				todos.create(self.currentUser.id, todo)
					.then(function () {
						readTodos();
						resetCreateForm();
						console.log('success');
					})
					.catch(function (res) {
						console.log(res.data);
					});
			};
			
			self.updateTodo = function (todo) {
				var updatedTodo = {
					completed: todo.completed,
					name: todo.name,
					archived: todo.archived
				};
				
				todos.update(self.currentUser.id, todo.id, updatedTodo)
					.then(function () {
						readTodos();
					}).catch(function (err) {
						console.log(err);
					});
			};
			
			self.archiveTodo = function (todo) {
				todo.archived = true;
				self.updateTodo(todo);
			};
		}
	]);