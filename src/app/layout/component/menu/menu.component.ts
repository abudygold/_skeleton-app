import {
	Component,
	EventEmitter,
	HostBinding,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavigationModel } from '../../../core/model';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	public expanded = false;

	@HostBinding('attr.aria-expanded')
	ariaExpanded = this.expanded;

	@Input()
	public item!: NavigationModel;

	@Input()
	public depth!: number;

	@Output()
	public openSidenav: EventEmitter<boolean>;

	constructor(public router: Router) {
		this.openSidenav = new EventEmitter();

		if (this.depth === undefined) {
			this.depth = 0;
		}
	}

	ngOnInit(): void {}

	public onItemSelected(item: NavigationModel): void {
		if (
			(item.subMenu && item.subMenu.length) ||
			item.level === 2 ||
			item.level === 3
		) {
			this.openSidenav.emit(true);
		}

		if (!item.subMenu || !item.subMenu.length) {
			this.router.navigate([item.target]);
		}

		if (item.subMenu && item.subMenu.length) {
			this.expanded = !this.expanded;

			if (item.target) {
				this.router.navigate([item.target]);
			}
		}
	}

	public parentMenuActive(): boolean {
		if (this.item.parentActive) {
			const menu = this.item.parentActive.some(parent =>
				window.location.href.includes(parent)
			);

			if (menu) {
				return true;
			}
		}

		return false;
	}

	public openSidenavChild(item: NavigationModel): void {
		if (
			(item.subMenu && item.subMenu.length) ||
			item.level === 2 ||
			item.level === 3
		) {
			this.openSidenav.emit(true);
		}
	}
}
