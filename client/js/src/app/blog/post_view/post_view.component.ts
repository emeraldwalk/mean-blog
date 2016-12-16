import { component, input, output } from 'ng1x-decorators';
import { IBlogPost } from './../../../../../../entities';

interface IEventEmitter<T> {
	(locals: T): void;
}

@component('postView', {
	templateUrl: 'js/src/app/blog/post_view/post_view.tpl.html'
})
export class PostViewComponent {
	@input() post: IBlogPost;
}