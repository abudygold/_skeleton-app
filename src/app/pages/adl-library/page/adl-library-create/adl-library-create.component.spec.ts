import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADLLibraryCreateComponent } from './adl-library-create.component';

describe('ADLLibraryCreateComponent', () => {
	let component: ADLLibraryCreateComponent;
	let fixture: ComponentFixture<ADLLibraryCreateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ADLLibraryCreateComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ADLLibraryCreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
