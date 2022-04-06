import { Component } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';
import { IconService } from './core/base-service';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
})
export class AppComponent {
	constructor(
		private iconService: IconService,
		private hljsLoader: HighlightLoader
	) {
		iconService.registerIcons();
	}
}
