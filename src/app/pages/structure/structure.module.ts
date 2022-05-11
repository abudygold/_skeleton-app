import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { StructureComponent } from './page/structure';
import { StructureRoutingModule } from './structure-routing.module';

@NgModule({
	declarations: [StructureComponent],
	imports: [
		CommonModule,
		StructureRoutingModule,
		MatDividerModule,
		MatButtonModule,
		MatTreeModule,
		MatIconModule,
	],
})
export class StructureModule {}
