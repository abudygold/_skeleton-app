import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickerComponent } from './page/picker';

const routes: Routes = [
	{
		path: '',
		component: PickerComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PickerRoutingModule {}
