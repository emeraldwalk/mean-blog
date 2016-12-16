import { component, input, output } from 'ng1x-decorators';
import { IBlogPost } from './../../../../../../entities';

interface IEventEmitter<T> {
	(locals: T): void;
}

@component('postEdit', {
	templateUrl: 'js/src/app/blog/post_edit/post_edit.tpl.html'
})
export class PostEditComponent {
	@input() post: IBlogPost;
	@output() onCancel: IEventEmitter<{id: string}>;
}