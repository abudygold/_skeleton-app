export const CodeSnippetViewListHTMLConst = `
<adl-table [table]="table"
	(nextAction)="clickedButton($event)"></adl-table>
`;

export const CodeSnippetViewListTSConst = `
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService, TableButtonModel, TableModel } from 'adl-ui-framework';
import { Subscription } from 'rxjs';
import {
	UserViewListServicePathConst,
	ViewListTableColumnConst,
	ViewListTableLabelConst,
} from '../../shared/const';
import { UserModel } from '../../shared/model';

@Component({
	selector: 'app-adl-library-view-list',
	templateUrl: './adl-library-view-list.component.html',
	styleUrls: ['./adl-library-view-list.component.scss'],
})
export class ADLLibraryViewListComponent implements OnInit, OnDestroy {
	public isLoading!: boolean;
	public table!: TableModel;

	private subscribers: Subscription[] = [];

	constructor(private router: Router, private baseService: BaseService) {}

	ngOnInit(): void {
		this.isLoading = false;
		this.subscribers = [];

		this.initTable();
		this.getViewListService();
	}

	private initTable(): void {
		const editButton = new TableButtonModel('Edit', 'edit', false, 'edit');
		const deleteButton = new TableButtonModel(
			'Delete',
			'delete',
			false,
			'delete'
		);

		this.table = new TableModel(
			[],
			0,
			ViewListTableColumnConst,
			ViewListTableLabelConst,
			1,
			10,
			[editButton, deleteButton],
			true
		);
	}

	private getViewListService(): void {
		this.isLoading = true;

		const url =
			UserViewListServicePathConst +
			'?page=' +
			this.table.page +
			'&limit=' +
			this.table.pageSize;

		const subs = this.baseService
			.getDataPaging(url, UserModel)
			.subscribe(resp => {
				if (resp) {
					this.table.totalData = resp.total;
					this.table.dataSource.data = resp.data;
				}

				this.isLoading = false;
			});

		this.subscribers.push(subs);
	}

	public clickedButton(event: { row: UserModel; action: string }): void {
		if (!event) {
			return;
		}

		if (event.action === 'edit') {
			this.navigateToEdit(event.row.id);
		} else if (event.action === 'delete') {
			this.deleteUserService(event.row.id);
		}
	}

	public deleteUserService(id: string): void {
		const subs = this.baseService
			.deleteData(UserViewListServicePathConst + '/' + id, null)
			.subscribe(resp => {
				if (resp) {
					this.getViewListService();
					console.log(resp);
				}
			});

		this.subscribers.push(subs);
	}

	private navigateToEdit(id: string): void {
		this.router.navigate(['/adl-library/edit'], {
			queryParams: {
				id,
			},
		});
	}

	ngOnDestroy(): void {
		this.subscribers.forEach(each => each.unsubscribe());
	}
}
`;

export const CodeSnippetViewListModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'adl-ui-framework';

@NgModule({
	imports: [
		CommonModule,
		TableModule,
	],
})
export class ADLLibraryModule {}
`;

export const CodeSnippetViewListTableConfigConst = `
export const ViewListTableLabelConst = [
	'Title',
	'First Name',
	'Last Name',
	'E-Mail',
	'Picture',
];

export const ViewListTableColumnConst = [
	{ value: 'title', format: 'string' },
	{ value: 'firstName', format: 'string' },
	{ value: 'lastName', format: 'string' },
	{ value: 'email', format: 'string' },
	{ value: 'picture', format: 'image' },
];
`;

export const CodeSnippetViewListServicePathConst = `
import { environment } from '../../../../../environments/environment';

const listPath = '/user';

/* adding $ before curly brackets */
export const UserViewListServicePathConst = {environment.api.baseUrl}{listPath};
`;
