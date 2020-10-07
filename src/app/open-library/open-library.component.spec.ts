import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLibraryComponent } from './open-library.component';

describe('OpenLibraryComponent', () => {
  let component: OpenLibraryComponent;
  let fixture: ComponentFixture<OpenLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
