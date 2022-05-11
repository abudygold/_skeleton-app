import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from 'adl-ui-framework';
import { Subscription } from 'rxjs';
import { UserCreateServicePathConst } from '../../shared/const';
import {
	CodeSnippetCreateFormHTMLConst,
	CodeSnippetCreateFormTSConst,
	CodeSnippetFormHTMLConst,
	CodeSnippetFormModuleConst,
	CodeSnippetFormRespModelConst,
	CodeSnippetFormServicePathConst,
	CodeSnippetFormTSConst,
	CodeSnippetFormValidationConst,
} from '../../shared/const/adl-library-form-snippet.const';
import { UserReqModel } from '../../shared/model';

@Component({
	selector: 'app-adl-library-create',
	templateUrl: './adl-library-create.component.html',
	styleUrls: ['./adl-library-create.component.scss'],
})
export class ADLLibraryCreateComponent implements OnInit, OnDestroy {
	public isSubmit!: boolean;
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;
	public codeSnippetFormHTML!: string;
	public codeSnippetFormTS!: string;
	public codeSnippetPath!: string;
	public codeSnippetModel!: string;
	public codeSnippetValidation!: string;

	private subscribers!: Subscription[];

	constructor(private baseService: BaseService) {}

	ngOnInit(): void {
		this.isSubmit = false;
		this.codeSnippet = CodeSnippetCreateFormHTMLConst;
		this.codeSnippetTS = CodeSnippetCreateFormTSConst;
		this.codeSnippetModule = CodeSnippetFormModuleConst;
		this.codeSnippetFormHTML = CodeSnippetFormHTMLConst;
		this.codeSnippetFormTS = CodeSnippetFormTSConst;
		this.codeSnippetPath = CodeSnippetFormServicePathConst;
		this.codeSnippetModel = CodeSnippetFormRespModelConst;
		this.codeSnippetValidation = CodeSnippetFormValidationConst;
		this.subscribers = [];
	}

	public onSubmit(bodyReq: UserReqModel): void {
		this.isSubmit = true;

		const subs = this.baseService
			.postData(UserCreateServicePathConst, bodyReq)
			.subscribe(() => {
				this.isSubmit = false;
			});

		this.subscribers.push(subs);
	}

	ngOnDestroy(): void {
		this.subscribers.forEach(each => each.unsubscribe());
	}
}
