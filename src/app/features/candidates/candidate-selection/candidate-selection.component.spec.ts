import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSelectionComponent } from './candidate-selection.component';

describe('CandidateSelectionComponent', () => {
  let component: CandidateSelectionComponent;
  let fixture: ComponentFixture<CandidateSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateSelectionComponent]
    });
    fixture = TestBed.createComponent(CandidateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
