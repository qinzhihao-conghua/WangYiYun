import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTopComponent } from './middle-top.component';

describe('MiddleTopComponent', () => {
  let component: MiddleTopComponent;
  let fixture: ComponentFixture<MiddleTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
