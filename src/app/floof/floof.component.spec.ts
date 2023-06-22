import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloofComponent } from './floof.component';

describe('FloofComponent', () => {
  let component: FloofComponent;
  let fixture: ComponentFixture<FloofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloofComponent]
    });
    fixture = TestBed.createComponent(FloofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
