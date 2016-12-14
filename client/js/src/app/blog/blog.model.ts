import { service, inject } from 'ng1x-decorators';
import { IBlogPost } from '../../../../../entities';
import { dispatch, getState } from '../../state/store';
import { beginRequestList, successRequestList } from '../../state/entities/entity.actions';
import { getEntityInEdit, getEntityList } from '../../state/entities/entity.selectors';
import { BLOG_ACTIONS } from '../../state/blog/blog.actions';

@service('blogModel')
@inject('$http')
export class BlogModel {
	constructor(private _$http: ng.IHttpService) {
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

	public getTitle(): string {
		return 'My Blog';
	}

	public getPostInEdit(): IBlogPost {
		return getEntityInEdit('blogPost')(getState());
	}

	public getPosts(): Array<IBlogPost> {
		return getEntityList('blogPost')(getState()).data;
	}

	// public getPosts(): Array<any> {
	// 	return this._$http.get<Array<any>>('/api/blog').then(response => {
	// 		return response.data;
	// 	});
	// }
}