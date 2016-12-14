System.config({
	baseURL: '/js',
	map: {
		'angular': '/lib/angular.js',
		'angular-ui-router': '/lib/angular-ui-router.js',
		'ng1x-decorators': '/lib/decorators.js',
		'redux': '/lib/redux.min.js',
		'reselect': '/lib/reselect.js'
	},
	meta: {
		'angular': {
			format: 'global',
			exports: 'angular'
		},
		'angular-ui-router': {
			deps: ['angular']
		},
		'ng1x-decorators': {
			deps: ['angular']
		},
		'build/app.js': {
			deps: ['angular-ui-router', 'ng1x-decorators']
		}
	},
	bundles: {
		'build/app.js': ['app/app.bootstrap']
	}
});

System.import('app/app.bootstrap');