import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	public side!: MatDrawerMode;
	public opened!: boolean;
	public isDesktop!: boolean;

	@HostListener('window:resize')
	private onResize(): void {
		this.isResolution(window.innerWidth);
	}

	constructor() {
		this.onResize();
	}

	ngOnInit(): void {
		this.isResolution(window.innerWidth);
	}

	private isResolution(width: number): void {
		this.isDesktop = width >= 768;

		this.opened = this.isDesktop;
		this.side = this.isDesktop ? 'side' : 'over';
	}
}
