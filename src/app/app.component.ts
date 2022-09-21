import { Component } from '@angular/core';
import { IconService } from 'adl-ui-framework';
import { HighlightLoader } from 'ngx-highlightjs';
import { IconsList } from '../assets/images/IconsList';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
})
export class AppComponent {
	constructor(
		private iconService: IconService,
		private hljsLoader: HighlightLoader
	) {
		iconService.registerIcons(IconsList, '../../../../assets/images/icons');
	}
}
