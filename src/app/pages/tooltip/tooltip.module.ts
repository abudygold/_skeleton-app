import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HighlightModule } from 'ngx-highlightjs';
import { TooltipComponent } from './page/tooltip';
import { TooltipRoutingModule } from './tooltip-routing.module';

@NgModule({
	declarations: [TooltipComponent],
	imports: [
		CommonModule,
		TooltipRoutingModule,
		MatTooltipModule,
		MatIconModule,
		MatDividerModule,
		MatButtonModule,
		HighlightModule,
		MatTabsModule,
	],
})
export class TooltipModule {}
