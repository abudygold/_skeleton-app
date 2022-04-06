import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADLLibrarySearchComponent } from './adl-library-search.component';

describe('ADLLibrarySearchComponent', () => {
	let component: ADLLibrarySearchComponent;
	let fixture: ComponentFixture<ADLLibrarySearchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ADLLibrarySearchComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ADLLibrarySearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
