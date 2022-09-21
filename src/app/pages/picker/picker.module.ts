import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { PickerComponent } from './page/picker';
import { PickerRoutingModule } from './picker-routing.module';

@NgModule({
	declarations: [PickerComponent],
	imports: [
		CommonModule,
		PickerRoutingModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatTabsModule,
		MatDatepickerModule,
		MatDividerModule,
		MatButtonModule,
		NgxMatTimepickerModule,
		HighlightModule,
	],
})
export class PickerModule {}
