import { component, input, inject } from 'ng1x-decorators';
import { IBlogPost } from '../../../../../../entities';

@component('postList', {
	templateUrl: '/js/src/app/blog/post_list/post_list.tpl.html'
})
export class PostListComponent {
	@input() posts: Array<IBlogPost>;
}