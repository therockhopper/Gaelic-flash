import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardResultComponent } from './flash-card-result.component';

describe('FlashCardResultComponent', () => {
  let component: FlashCardResultComponent;
  let fixture: ComponentFixture<FlashCardResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
