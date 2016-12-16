import { BlogModel } from './blog/blog.model';

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
			abstract: true,
			url: '/blog',
			template: '<blog></blog>'
		});

		$stateProvider.state('app.blog.post-list', {
			url: '',
			template: '<post-list posts="$ctrl.posts"></post-list>'
		});

		$stateProvider.state('app.blog.post-view', {
			url: '/:slug',
			template: '<post-view post="{title: \'Mock Post\'}"></post-view>'
		});

		$stateProvider.state('app.blog.post-edit', {
			url: '/edit/:id',
			template: '<post-edit post="$ctrl.inEdit" on-cancel="$ctrl.onCancelEdit(id)"></post-edit>',
			resolve: {
				block: ['$stateParams', 'blogModel', (
					$stateParams: ng.ui.IStateParamsService & {id: string},
					blogModel: BlogModel) => {
					blogModel.editPost($stateParams.id);
				}]
			}
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