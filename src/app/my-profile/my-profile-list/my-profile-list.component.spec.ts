import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileListComponent } from './my-profile-list.component';

describe('MyProfileListComponent', () => {
  let component: MyProfileListComponent;
  let fixture: ComponentFixture<MyProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
