var app = angular.module('app', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
	// $urlRouterProvider.otherwise('/404');
	$stateProvider
		.state('home',{
			url : '/',
			templateUrl : 'app/views/home.html',
			controller: 'MainCtrl'
		});

}]);

app.run(['$rootScope', '$location',function ($rootScope,$location) {

}]);
