import { ngModule } from 'ng1x-decorators';
import { BlogComponent } from './blog.component';
import { BlogModel } from './blog.model';

@ngModule({
	name: 'blogModule',
	services: [BlogModel],
	components: [BlogComponent]
})
export class BlogModule {
}