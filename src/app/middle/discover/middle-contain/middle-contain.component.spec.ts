import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleContainComponent } from './middle-contain.component';

describe('MiddleContainComponent', () => {
  let component: MiddleContainComponent;
  let fixture: ComponentFixture<MiddleContainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleContainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
