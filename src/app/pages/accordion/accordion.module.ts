import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HighlightModule } from 'ngx-highlightjs';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './page/accordion';

@NgModule({
	declarations: [AccordionComponent],
	imports: [
		CommonModule,
		AccordionRoutingModule,
		MatExpansionModule,
		MatButtonModule,
		MatIconModule,
		HighlightModule,
		MatDividerModule,
	],
})
export class AccordionModule {}
