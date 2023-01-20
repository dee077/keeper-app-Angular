import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNoteComponent } from './input-note.component';

describe('InputNoteComponent', () => {
  let component: InputNoteComponent;
  let fixture: ComponentFixture<InputNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
