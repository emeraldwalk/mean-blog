import { ngModule } from 'ng1x-decorators';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { routes } from './app.routes';

@ngModule({
	name: 'appModule',
	configBlocks: [routes],
	components: [
		AppComponent
	],
	dependencies: ['ui.router', BlogModule]
})
export class AppModule {
}