import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMyProfileComponent } from './create-my-profile.component';

describe('CreateMyProfileComponent', () => {
  let component: CreateMyProfileComponent;
  let fixture: ComponentFixture<CreateMyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
