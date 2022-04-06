import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './page/checkbox';

@NgModule({
	declarations: [CheckboxComponent],
	imports: [
		CommonModule,
		CheckboxRoutingModule,
		FormsModule,
		MatCheckboxModule,
		MatButtonModule,
		MatDividerModule,
		MatTabsModule,
		MatIconModule,
		HighlightModule,
	],
})
export class CheckboxModule {}
