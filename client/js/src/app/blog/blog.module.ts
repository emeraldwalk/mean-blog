import { ngModule } from 'ng1x-decorators';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './post_list/post_list.component';
import { PostViewComponent } from './post_view/post_view.component';
import { PostEditComponent } from './post_edit/post_edit.component';
import { BlogModel } from './blog.model';

@ngModule({
	name: 'blogModule',
	services: [BlogModel],
	components: [
		BlogComponent,
		PostListComponent,
		PostViewComponent,
		PostEditComponent
	]
})
export class BlogModule {
}