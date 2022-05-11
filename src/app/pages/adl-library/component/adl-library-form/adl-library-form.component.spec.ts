import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADLLibraryFormComponent } from './adl-library-form.component';

describe('ADLLibraryFormComponent', () => {
	let component: ADLLibraryFormComponent;
	let fixture: ComponentFixture<ADLLibraryFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ADLLibraryFormComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ADLLibraryFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
