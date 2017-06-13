import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormContainerComponent } from './input-form-container.component';

describe('InputFormContainerComponent', () => {
  let component: InputFormContainerComponent;
  let fixture: ComponentFixture<InputFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
