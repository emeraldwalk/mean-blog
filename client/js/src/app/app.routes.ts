export let routes = [
	'$locationProvider',
	'$stateProvider',
	($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider) => {
		$locationProvider.html5Mode(true);

		$stateProvider.state('app', {
			abstract: true,
			url: '',
			template: '<app></app>'
		});

		$stateProvider.state('app.home', {
			url: '/',
			template: '<div>Home</div>'
		});

		$stateProvider.state('app.blog', {
			url: '/blog',
			template: '<blog></blog>'
		});

		$stateProvider.state('app.signin', {
			url: '/signin',
			template: '<div>Sign In</div>'
		});

		$stateProvider.state('app.404', {
			url: '/*path',
			template: '<div>Not Found</div>'
		});
	}
];