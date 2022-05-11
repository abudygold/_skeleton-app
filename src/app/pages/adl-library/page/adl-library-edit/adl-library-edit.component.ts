import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'adl-ui-framework';
import { Subscription } from 'rxjs';
import { UserViewListServicePathConst } from '../../shared/const';
import {
	CodeSnippetEditFormHTMLConst,
	CodeSnippetEditFormTSConst,
	CodeSnippetFormHTMLConst,
	CodeSnippetFormModuleConst,
	CodeSnippetFormRequestModelConst,
	CodeSnippetFormRespModelConst,
	CodeSnippetFormServicePathConst,
	CodeSnippetFormTSConst,
	CodeSnippetFormValidationConst,
} from '../../shared/const/adl-library-form-snippet.const';
import { UserModel } from '../../shared/model';

@Component({
	selector: 'app-adl-library-edit',
	templateUrl: './adl-library-edit.component.html',
	styleUrls: ['./adl-library-edit.component.scss'],
})
export class ADLLibraryEditComponent implements OnInit, OnDestroy {
	public isSubmit!: boolean;
	public user!: UserModel;
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;
	public codeSnippetFormHTML!: string;
	public codeSnippetFormTS!: string;
	public codeSnippetPath!: string;
	public codeSnippetReqModel!: string;
	public codeSnippetValidation!: string;
	public codeSnippetModel!: string;

	private id!: string;
	private subscribers!: Subscription[];

	constructor(
		private activatedRoute: ActivatedRoute,
		private baseService: BaseService
	) {}

	ngOnInit(): void {
		this.isSubmit = false;
		this.subscribers = [];
		this.id = this.activatedRoute.snapshot.queryParams.id
			? this.activatedRoute.snapshot.queryParams.id
			: '60d0fe4f5311236168a109d4';

		this.codeSnippet = CodeSnippetEditFormHTMLConst;
		this.codeSnippetTS = CodeSnippetEditFormTSConst;
		this.codeSnippetModule = CodeSnippetFormModuleConst;
		this.codeSnippetFormHTML = CodeSnippetFormHTMLConst;
		this.codeSnippetFormTS = CodeSnippetFormTSConst;
		this.codeSnippetPath = CodeSnippetFormServicePathConst;
		this.codeSnippetReqModel = CodeSnippetFormRequestModelConst;
		this.codeSnippetValidation = CodeSnippetFormValidationConst;
		this.codeSnippetModel = CodeSnippetFormRespModelConst;

		this.getDetailService(this.id);
	}

	private getDetailService(id: string): void {
		const subs = this.baseService
			.getData(UserViewListServicePathConst + '/' + id, UserModel)
			.subscribe(resp => {
				if (resp) {
					this.user = resp;
				}
			});

		this.subscribers.push(subs);
	}

	public onSubmit(user: any): void {
		this.isSubmit = true;

		const subs = this.baseService
			.postData(UserViewListServicePathConst + '/' + user.id, UserModel)
			.subscribe(() => {
				this.isSubmit = false;
			});

		this.subscribers.push(subs);
	}

	ngOnDestroy(): void {
		this.subscribers.forEach(each => each.unsubscribe());
	}
}
