import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '../../../core/model';
import { NavigationConst } from '../../../core/navigation';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	public navigation!: NavigationModel[];

	constructor() {}

	ngOnInit(): void {
		this.navigation = NavigationConst;
	}
}
