import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsList } from '../../../assets/images/IconsList';

@Injectable({
	providedIn: 'root',
})
export class IconService {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {}

	public registerIcons(): void {
		this.loadIcons(IconsList, '../../../../assets/images/icons');
	}

	private loadIcons(iconKeys: any[], iconUrl: string): void {
		iconKeys.forEach(key => {
			this.matIconRegistry.addSvgIcon(
				key.name,
				this.domSanitizer.bypassSecurityTrustResourceUrl(
					`${iconUrl}/${key.location}`
				)
			);
		});
	}
}
