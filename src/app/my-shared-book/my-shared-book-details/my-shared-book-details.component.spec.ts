import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedBookDetailsComponent } from './my-shared-book-details.component';

describe('MySharedBookDetailsComponent', () => {
  let component: MySharedBookDetailsComponent;
  let fixture: ComponentFixture<MySharedBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySharedBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
