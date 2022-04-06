import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADLLibraryViewListComponent } from './adl-library-view-list.component';

describe('ADLLibraryViewListComponent', () => {
	let component: ADLLibraryViewListComponent;
	let fixture: ComponentFixture<ADLLibraryViewListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ADLLibraryViewListComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ADLLibraryViewListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
