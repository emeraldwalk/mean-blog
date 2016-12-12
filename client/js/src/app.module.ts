import { ngModule } from 'ng1x-decorators';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@ngModule({
	name: 'appModule',
	configBlocks: [routes],
	components: [
		AppComponent
	],
	dependencies: ['ui.router']
})
export class AppModule {
}