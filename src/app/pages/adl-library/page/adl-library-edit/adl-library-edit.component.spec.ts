import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADLLibraryEditComponent } from './adl-library-edit.component';

describe('ADLLibraryEditComponent', () => {
	let component: ADLLibraryEditComponent;
	let fixture: ComponentFixture<ADLLibraryEditComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ADLLibraryEditComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ADLLibraryEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
