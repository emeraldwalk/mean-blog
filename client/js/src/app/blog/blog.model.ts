import { service, inject } from 'ng1x-decorators';
import { IBlogPost } from '../../../../../entities';
import { dispatch, getState } from '../../state/store';
import { blogPostListRequest, blogPostListSuccess } from '../../state/blog/blog.actions';
import { getPostInEdit, getPostsList } from '../../state/blog/blog.selectors';

@service('blogModel')
@inject('$http')
export class BlogModel {
	constructor(private _$http: ng.IHttpService) {
	}

	public loadPosts(): void {
		if(getState().isLoaded.blogPosts) {
			console.log('Posts already loaded.');
			return;
		}

		dispatch(blogPostListRequest());
		this._$http.get<Array<IBlogPost>>('/api/blog').then(response => {
			dispatch(blogPostListSuccess(response.data))
		});
	}

	public getTitle(): string {
		return 'My Blog';
	}

	public getPostInEdit(): IBlogPost {
		return getPostInEdit(getState());
	}

	public getPosts(): Array<IBlogPost> {
		return getPostsList(getState()).data;
	}

	// public getPosts(): Array<any> {
	// 	return this._$http.get<Array<any>>('/api/blog').then(response => {
	// 		return response.data;
	// 	});
	// }
}