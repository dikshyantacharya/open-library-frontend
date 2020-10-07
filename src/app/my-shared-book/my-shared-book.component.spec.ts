import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedBookComponent } from './my-shared-book.component';

describe('MySharedBookComponent', () => {
  let component: MySharedBookComponent;
  let fixture: ComponentFixture<MySharedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySharedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
