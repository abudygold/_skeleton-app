import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HighlightModule } from 'ngx-highlightjs';
import { TypographyComponent } from './page/typography';
import { TypographyRoutingModule } from './typography-routing.module';

@NgModule({
	declarations: [TypographyComponent],
	imports: [
		CommonModule,
		TypographyRoutingModule,
		MatDividerModule,
		MatIconModule,
		MatButtonModule,
		HighlightModule,
	],
})
export class TypographyModule {}
