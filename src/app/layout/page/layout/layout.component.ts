import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	public mode!: MatDrawerMode;
	public isDesktop!: boolean;

	@HostListener('window:resize')
	public onResize(): void {
		location.reload();
		this.isResolution();
	}

	constructor(private deviceService: DeviceDetectorService) { }

	ngOnInit(): void {
		this.isResolution();
	}

	private isResolution(): void {
		this.deviceService.setDeviceInfo(navigator.userAgent);
		
		this.isDesktop = this.deviceService.getDeviceInfo().deviceType === 'desktop';
		this.mode = this.isDesktop ? 'side' : 'over';
		
		localStorage.setItem('isDesktop', this.isDesktop.toString());
	}
}
