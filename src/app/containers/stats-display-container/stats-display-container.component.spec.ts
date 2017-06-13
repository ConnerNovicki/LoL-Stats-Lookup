import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDisplayContainerComponent } from './stats-display-container.component';

describe('StatsDisplayContainerComponent', () => {
  let component: StatsDisplayContainerComponent;
  let fixture: ComponentFixture<StatsDisplayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsDisplayContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDisplayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
