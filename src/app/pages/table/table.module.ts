import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './page/table/table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
	declarations: [TableComponent],
	imports: [CommonModule, TableRoutingModule],
})
export class TableModule {}
