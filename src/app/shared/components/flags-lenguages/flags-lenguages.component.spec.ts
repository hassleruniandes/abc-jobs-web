import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsLenguagesComponent } from './flags-lenguages.component';

describe('FlagsLenguagesComponent', () => {
  let component: FlagsLenguagesComponent;
  let fixture: ComponentFixture<FlagsLenguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagsLenguagesComponent]
    });
    fixture = TestBed.createComponent(FlagsLenguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
