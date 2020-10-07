import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyBooks2Component } from './update-my-books2.component';

describe('UpdateMyBooks2Component', () => {
  let component: UpdateMyBooks2Component;
  let fixture: ComponentFixture<UpdateMyBooks2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMyBooks2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyBooks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
