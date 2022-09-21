import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { TabsComponent } from './page/tabs';
import { TabsRoutingModule } from './tabs-routing.module';

@NgModule({
	declarations: [TabsComponent],
	imports: [
		CommonModule,
		TabsRoutingModule,
		MatDividerModule,
		MatTabsModule,
		MatIconModule,
		MatButtonModule,
		HighlightModule,
	],
})
export class TabsModule {}
