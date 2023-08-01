import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastResultButtonComponent } from './last-result-button.component';

describe('LastResultButtonComponent', () => {
  let component: LastResultButtonComponent;
  let fixture: ComponentFixture<LastResultButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastResultButtonComponent]
    });
    fixture = TestBed.createComponent(LastResultButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
