import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { DialogRoutingModule } from './dialog-routing.module';
import { AlertDialogComponent } from './dialog/alert-dialog';
import { DialogComponent } from './page/dialog';

@NgModule({
	declarations: [DialogComponent, AlertDialogComponent],
	imports: [
		CommonModule,
		DialogRoutingModule,
		MatDialogModule,
		MatButtonModule,
		MatDividerModule,
		MatTabsModule,
		MatIconModule,
		HighlightModule,
	],
	entryComponents: [AlertDialogComponent],
})
export class DialogModule {}
