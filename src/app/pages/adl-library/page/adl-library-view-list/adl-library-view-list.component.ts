import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService, ButtonModel, TableModel } from 'axiata-ui-framework';
import { Subscription } from 'rxjs';
import {
	ViewListServicePathConst,
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

	constructor(private baseService: BaseService) {}

	ngOnInit(): void {
		this.isLoading = false;
		this.subscribers = [];

		this.initTable();
		this.getViewListService();
	}

	private initTable(): void {
		const detailButton = new ButtonModel(
			'Detail',
			'primary',
			'detail',
			'flat'
		);
		const editButton = new ButtonModel('Edit', 'warn', 'edit', 'stroked');
		const deleteButton = new ButtonModel(
			'Delete',
			'warn',
			'delete',
			'flat'
		);

		this.table = new TableModel(
			[],
			0,
			ViewListTableColumnConst,
			ViewListTableLabelConst,
			1,
			10,
			[detailButton, editButton, deleteButton],
			true
		);
	}

	private getViewListService(): void {
		this.isLoading = true;

		const url =
			ViewListServicePathConst +
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

	public clickedButton(event: { row: object; action: string }): void {
		if (!event) {
			return;
		}

		if (event.action === 'detail') {
			console.log('--- Navigate to Detail Page Here ---', event);
		} else if (event.action === 'edit') {
			console.log('--- Navigate to Edit Page Here ---', event);
		} else if (event.action === 'delete') {
			console.log('--- Delete Data Here ---', event);
		}
	}

	ngOnDestroy(): void {
		this.subscribers.forEach(each => each.unsubscribe());
	}
}
