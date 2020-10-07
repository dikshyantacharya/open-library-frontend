import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMyBooksComponent } from './create-my-books.component';

describe('CreateMyBooksComponent', () => {
  let component: CreateMyBooksComponent;
  let fixture: ComponentFixture<CreateMyBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMyBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
