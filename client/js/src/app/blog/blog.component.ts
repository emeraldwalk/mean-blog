import { component, input, inject } from 'ng1x-decorators';
import { IBlogPost } from '../../../../../entities';
import { BlogModel } from './blog.model';

@component('blog', {
	templateUrl: '/js/src/app/blog/blog.tpl.html'
})
@inject('blogModel')
export class BlogComponent {
	constructor(private _blogModel: BlogModel) {
	}

	public get title(): string {
		return this._blogModel.getTitle();
	}

	public get posts(): Array<any> {
		return this._blogModel.getPosts();
	}

	public get inEdit(): IBlogPost {
		return this._blogModel.getPostInEdit();
	}

	public $onInit(): void {
		this._blogModel.loadPosts();
	}

	public onCancelEdit(id: string): void {
		this._blogModel.cancelEditPost(id);
	}
}