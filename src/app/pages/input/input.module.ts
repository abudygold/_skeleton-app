import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './page/input';

@NgModule({
	declarations: [InputComponent],
	imports: [
		CommonModule,
		InputRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDividerModule,
		MatIconModule,
		MatTabsModule,
		MatButtonModule,
		HighlightModule,
	],
})
export class InputModule {}
