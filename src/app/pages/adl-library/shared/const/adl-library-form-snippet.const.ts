export const CodeSnippetCreateFormHTMLConst = `
<app-adl-library-form [updateLoading]="isSubmit"
	(onSubmitReq)="onSubmit($event)"></app-adl-library-form>
`;

export const CodeSnippetCreateFormTSConst = `
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from 'adl-ui-framework';
import { Subscription } from 'rxjs';
import { UserCreateServicePathConst } from '../../shared/const';
import { UserReqModel } from '../../shared/model';

@Component({
	selector: 'app-adl-library-create',
	templateUrl: './adl-library-create.component.html',
	styleUrls: ['./adl-library-create.component.scss'],
})
export class ADLLibraryCreateComponent implements OnInit, OnDestroy {
	public isSubmit!: boolean;

	private subscribers!: Subscription[];

	constructor(private baseService: BaseService) {}

	ngOnInit(): void {
		this.isSubmit = false;
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
`;

export const CodeSnippetEditFormHTMLConst = `
<app-adl-library-form *ngIf="user"
	[updateLoading]="isSubmit"
	[userDetail]="user"
	(onSubmitReq)="onSubmit($event)"></app-adl-library-form>
`;

export const CodeSnippetEditFormTSConst = `
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'adl-ui-framework';
import { Subscription } from 'rxjs';
import { UserViewListServicePathConst } from '../../shared/const';
import { UserModel } from '../../shared/model';

@Component({
	selector: 'app-adl-library-edit',
	templateUrl: './adl-library-edit.component.html',
	styleUrls: ['./adl-library-edit.component.scss'],
})
export class ADLLibraryEditComponent implements OnInit, OnDestroy {
	public isSubmit!: boolean;
	public user!: UserModel;

	private id!: string;
	private subscribers!: Subscription[];

	constructor(
		private activatedRoute: ActivatedRoute,
		private baseService: BaseService
	) {}

	ngOnInit(): void {
		this.isSubmit = false;
		this.subscribers = [];
		this.id = this.activatedRoute.snapshot.queryParams.id;

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
`;

export const CodeSnippetFormHTMLConst = `
<form class="adl-library-form"
	[formGroup]="form">
	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="First Name"
						autocomplete="off"
						formControlName="firstName">
				</mat-form-field>

				<mat-error align="start"
					*ngFor="let messageValidation of validationMessages.firstName">
					<p class="font-12px"
						*ngIf="form.get('firstName')?.touched 
							&& form.get('firstName')?.hasError(messageValidation.type)">
						{{messageValidation.message}}
					</p>
				</mat-error>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="Last Name"
						autocomplete="off"
						formControlName="lastName">
				</mat-form-field>

				<mat-error align="start"
					*ngFor="let messageValidation of validationMessages.lastName">
					<p class="font-12px"
						*ngIf="form.get('lastName')?.touched 
							&& form.get('lastName')?.hasError(messageValidation.type)">
						{{messageValidation.message}}
					</p>
				</mat-error>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="Email"
						autocomplete="off"
						formControlName="email">
				</mat-form-field>

				<mat-error align="start"
					*ngFor="let messageValidation of validationMessages.email">
					<p class="font-12px"
						*ngIf="form.get('email')?.touched 
							&& form.get('email')?.hasError(messageValidation.type)">
						{{messageValidation.message}}
					</p>
				</mat-error>
			</div>
		</div>
	</div>

	<mat-divider class="mb-3"></mat-divider>

	<div class="d-flex justify-content-between align-items-center my-4">
		<p class="font-black font-AxiataBold mb-0">
			Items
		</p>

		<button mat-flat-button
			type="button"
			color="primary"
			class="font-12px"
			(click)="addItemControl()">
			Add Item
		</button>
	</div>

	<div class="row mb-3"
		*ngFor="let item of getItemForm(); let itemIndex = index">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<div class="d-flex">
					<mat-form-field class="input-classic input-no-hint"
						floatLabel="never">
						<input matInput
							[placeholder]="'Item ' + (itemIndex + 1)"
							autocomplete="off"
							[formControl]="item.get('itemName') | toControl">
					</mat-form-field>

					<mat-icon class="icon-remove font-20px pointer"
						(click)="removeItemControl(itemIndex)">close</mat-icon>
				</div>

				<mat-error align="start"
					*ngFor="let validation of validationMessages.itemName">
					<p class="font-12px"
						*ngIf="(item.get('itemName') | toControl).touched 
								&& (item.get('itemName') | toControl).hasError('required')">
						{{ validation.message }}
					</p>
				</mat-error>
			</div>

			<mat-divider></mat-divider>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-12">
			<button mat-flat-button
				color="primary"
				class="loader"
				[disabled]="isLoading"
				(click)="onSubmit()">
				<mat-spinner *ngIf="isLoading"
					class="my-auto mr-2"
					[diameter]="20"
					[strokeWidth]="3"></mat-spinner>
				Submit
			</button>
		</div>
	</div>
</form>
`;

export const CodeSnippetFormTSConst = `
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserValidationMessageConst } from '../../shared/const';
import { UserModel, UserReqModel } from '../../shared/model';

@Component({
	selector: 'app-adl-library-form',
	templateUrl: './adl-library-form.component.html',
	styleUrls: ['./adl-library-form.component.scss'],
})
export class ADLLibraryFormComponent implements OnInit {
	@Output()
	public onSubmitReq: EventEmitter<UserReqModel>;

	@Input()
	public userDetail!: UserModel;

	public form!: FormGroup;
	public isLoading!: boolean;
	public validationMessages!: any;

	@Input()
	set updateLoading(isLoading: boolean) {
		this.isLoading = isLoading;
	}

	constructor() {
		this.onSubmitReq = new EventEmitter();
	}

	ngOnInit(): void {
		this.validationMessages = UserValidationMessageConst;

		this.initForm();
		this.initDataToForm();
	}

	private initForm(): void {
		this.form = new FormGroup({
			id: new FormControl(null),
			firstName: new FormControl(null, [Validators.required]),
			lastName: new FormControl(null, [Validators.required]),
			email: new FormControl(null, [
				Validators.required,
				Validators.email,
			]),
			items: new FormArray([this.initItemForm()], Validators.required),
		});
	}

	private initItemForm(): FormGroup {
		const form = new FormGroup({
			id: new FormControl(null),
			itemName: new FormControl(null, Validators.required),
		});

		return form;
	}

	private initDataToForm() {
		if (!this.userDetail) {
			return;
		}

		this.form.get('id')?.setValue(this.userDetail.id);
		this.form.get('firstName')?.setValue(this.userDetail.firstName);
		this.form.get('lastName')?.setValue(this.userDetail.lastName);
		this.form.get('email')?.setValue(this.userDetail.email);
	}

	public getItemForm(): FormGroup[] {
		return (this.form.get('items') as FormArray).controls as FormGroup[];
	}

	public addItemControl() {
		const form = this.initItemForm();

		(this.form.get('items') as FormArray).push(form);
		return;
	}

	public removeItemControl(index: number) {
		(this.form.get('items') as FormArray).removeAt(index);
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if (!this.form.valid) {
			return;
		}

		const bodyReq = new UserReqModel().clone(this.form.getRawValue());
		this.onSubmitReq.emit(bodyReq);
	}
}
`;

export const CodeSnippetFormModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToControlModule } from '../../ui/to-control/to-control.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDividerModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		ToControlModule,
	],
})
export class ADLLibraryModule {}
`;

export const CodeSnippetFormServicePathConst = `
import { environment } from '../../../../../environments/environment';

const listPath = '/user';
const createPath = '/user/create';

/* adding $ before curly brackets */
export const UserViewListServicePathConst = {environment.api.baseUrl}{listPath};
export const UserCreateServicePathConst = {environment.api.baseUrl}{createPath};
`;

export const CodeSnippetFormRespModelConst = `
export class UserModel {
	public dateOfBirth!: Date;
	public email!: string;
	public firstName!: string;
	public gender!: string;
	public id!: string;
	public lastName!: string;
	public phone!: string;
	public picture!: string;
	public title!: string;

	public convert(dto: any): UserModel {
		if (dto.dateOfBirth) {
			this.dateOfBirth = dto.dateOfBirth;
		}
		if (dto.email) {
			this.email = dto.email;
		}
		if (dto.firstName) {
			this.firstName = dto.firstName;
		}
		if (dto.gender) {
			this.gender = dto.gender;
		}
		if (dto.id) {
			this.id = dto.id;
		}
		if (dto.lastName) {
			this.lastName = dto.lastName;
		}
		if (dto.phone) {
			this.phone = dto.phone;
		}
		if (dto.picture) {
			this.picture = dto.picture;
		}
		if (dto.title) {
			this.title = dto.title;
		}

		return this;
	}
}
`;

export const CodeSnippetFormRequestModelConst = `
import { UserItemReqModel } from './user-item-req.model';

export class UserReqModel {
	public id!: string;
	public firstName!: string;
	public lastName!: string;
	public email!: string;
	public items!: UserItemReqModel;

	public clone(source: any): UserReqModel {
		if (source.id) {
			this.id = source.id;
		}
		if (source.firstName) {
			this.firstName = source.firstName;
		}
		if (source.lastName) {
			this.lastName = source.lastName;
		}
		if (source.email) {
			this.email = source.email;
		}
		if (source.items) {
			this.items = source.items.reduce((result: any, each: any) => {
				result.push(new UserItemReqModel().clone(each));
				return result;
			}, []);
		}

		return this;
	}

	public convert(): any {
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			// items: this.items.convert(),
		};
	}
}
`;

export const CodeSnippetFormValidationConst = `
export const UserValidationMessageConst = {
	firstName: [{ type: 'required', message: 'First Name is required' }],
	lastName: [{ type: 'required', message: 'Last Name is required' }],
	email: [
		{ type: 'required', message: 'Email is required' },
		{ type: 'email', message: 'Email must be a valid email address' },
	],
	itemName: [{ type: 'required', message: 'Item Name is required' }],
};
`;
