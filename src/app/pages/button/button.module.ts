import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './page/button';

@NgModule({
	declarations: [ButtonComponent],
	imports: [
		CommonModule,
		ButtonRoutingModule,
		MatButtonModule,
		MatIconModule,
		MatTabsModule,
		MatDividerModule,
		MatProgressSpinnerModule,
		HighlightModule,
	],
})
export class ButtonModule {}
