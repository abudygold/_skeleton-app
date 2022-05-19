import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService, TableButtonModel, TableModel } from 'adl-ui-framework';
import { Subscription } from 'rxjs';
import {
	CodeSnippetViewListHTMLConst,
	CodeSnippetViewListModuleConst,
	CodeSnippetViewListServicePathConst,
	CodeSnippetViewListTableConfigConst,
	CodeSnippetViewListTSConst,
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
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;
	public codeSnippetTableConfig!: string;
	public codeSnippetPathConfig!: string;

	private subscribers: Subscription[] = [];

	constructor(private router: Router, private baseService: BaseService) {}

	ngOnInit(): void {
		this.isLoading = false;
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetViewListHTMLConst;
		this.codeSnippetTS = CodeSnippetViewListTSConst;
		this.codeSnippetModule = CodeSnippetViewListModuleConst;
		this.codeSnippetTableConfig = CodeSnippetViewListTableConfigConst;
		this.codeSnippetPathConfig = CodeSnippetViewListServicePathConst;
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
