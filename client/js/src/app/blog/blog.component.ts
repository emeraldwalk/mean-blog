import { component, input, inject } from 'ng1x-decorators';
import { BlogModel } from './blog.model';

@component('blog', {
	templateUrl: '/js/src/app/blog/blog.tpl.html'
})
@inject('blogModel')
export class BlogComponent {
	constructor(private _blogModel: BlogModel) {
	}

	get title(): string {
		return this._blogModel.getTitle();
	}

	get posts(): Array<any> {
		return this._blogModel.getPosts();
	}

	public $onInit(): void {
		this._blogModel.loadPosts();
	}
}