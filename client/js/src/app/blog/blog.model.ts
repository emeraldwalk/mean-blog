import { service, inject } from 'ng1x-decorators';
import { IBlogPost } from '../../../../../entities';
import { dispatch, getState } from '../../state/store';
import { beginEdit, cancelEdit, beginRequestList, successRequestList } from '../../state/entities/entity.actions';
import { getEntityInEdit, getEntityList } from '../../state/entities/entity.selectors';
import { BLOG_ACTIONS } from '../../state/blog/blog.actions';

@service('blogModel')
@inject('$http', '$state')
export class BlogModel {
	constructor(
		private _$http: ng.IHttpService,
		private _$state: ng.ui.IStateService) {
	}

	public loadPosts(): void {
		if(getState().isLoaded.blogPost) {
			console.log('Posts already loaded.');
			return;
		}

		dispatch(beginRequestList(BLOG_ACTIONS));
		this._$http.get<Array<IBlogPost>>('/api/blog').then(response => {
			dispatch(successRequestList(BLOG_ACTIONS, response.data));
		});
	}

	public editPost(id: string): void {
		dispatch(beginEdit(BLOG_ACTIONS, id));
	}

	public cancelEditPost(id: string): void {
		dispatch(cancelEdit(BLOG_ACTIONS, id));
		this._$state.transitionTo('app.blog.post-list');
	}

	public getTitle(): string {
		return 'My Blog';
	}

	public getPostInEdit(): IBlogPost {
		return getEntityInEdit('blogPost')(getState());
	}

	public getPosts(): Array<IBlogPost> {
		return getEntityList('blogPost')(getState()).data;
	}
}