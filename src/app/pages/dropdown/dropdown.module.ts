import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './page/dropdown';

@NgModule({
	declarations: [DropdownComponent],
	imports: [
		CommonModule,
		DropdownRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HighlightModule,
		MatSelectModule,
		MatTabsModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
	],
})
export class DropdownModule {}
