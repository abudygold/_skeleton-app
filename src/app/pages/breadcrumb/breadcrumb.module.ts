import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HighlightModule } from 'ngx-highlightjs';
import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { BreadcrumbComponent } from './page/breadcrumb';

@NgModule({
	declarations: [BreadcrumbComponent],
	imports: [
		CommonModule,
		BreadcrumbRoutingModule,
		HighlightModule,
		MatDividerModule,
		MatButtonModule,
		MatIconModule,
	],
})
export class BreadcrumbModule {}
