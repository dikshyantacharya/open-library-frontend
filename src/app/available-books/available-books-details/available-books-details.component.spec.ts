import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBooksDetailsComponent } from './available-books-details.component';

describe('AvailableBooksDetailsComponent', () => {
  let component: AvailableBooksDetailsComponent;
  let fixture: ComponentFixture<AvailableBooksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableBooksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBooksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
