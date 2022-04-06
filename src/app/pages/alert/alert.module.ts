import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HighlightModule } from 'ngx-highlightjs';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './page/alert';

@NgModule({
	declarations: [AlertComponent],
	imports: [
		CommonModule,
		AlertRoutingModule,
		MatIconModule,
		MatButtonModule,
		HighlightModule,
		MatDividerModule,
	],
})
export class AlertModule {}
