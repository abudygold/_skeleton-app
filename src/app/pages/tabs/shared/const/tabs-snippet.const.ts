export const CodeSnippetTabsHTMLConst = `
<p class="font-black font-AxiataBold">
	Tabs Line
</p>
<mat-tab-group class="tabs-line">
	<mat-tab label="First"> Content 1 </mat-tab>
	<mat-tab label="Second"> Content 2 </mat-tab>
	<mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>

<p class="font-black font-AxiataBold mt-4">
	Tabs Contained
</p>

<mat-tab-group class="tabs-contained">
	<mat-tab label="First"> Content 1 </mat-tab>
	<mat-tab label="Second"> Content 2 </mat-tab>
	<mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
`;

export const CodeSnippetTabsModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from './page/tabs/tabs.component';

@NgModule({
	declarations: [TabsComponent],
	imports: [CommonModule, TabsRoutingModule, MatDividerModule, MatTabsModule],
})
export class TabsModule {}
`;
