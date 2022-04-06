import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PickerComponent } from './page/picker';
import { PickerRoutingModule } from './picker-routing.module';

@NgModule({
	declarations: [PickerComponent],
	imports: [CommonModule, PickerRoutingModule],
})
export class PickerModule {}
