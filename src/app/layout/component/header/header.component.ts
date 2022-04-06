import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Output()
	public sidenavToggle: EventEmitter<void>;

	constructor() {
		this.sidenavToggle = new EventEmitter();
	}

	ngOnInit(): void {}

	public onToggleSidenav(): void {
		this.sidenavToggle.emit();
	}
}
