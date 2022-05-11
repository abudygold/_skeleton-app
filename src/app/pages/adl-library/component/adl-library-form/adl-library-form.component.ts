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
