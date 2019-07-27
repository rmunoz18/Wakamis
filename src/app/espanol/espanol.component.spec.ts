import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanolComponent } from './espanol.component';

describe('EspanolComponent', () => {
  let component: EspanolComponent;
  let fixture: ComponentFixture<EspanolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspanolComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
