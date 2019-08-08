import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaunoComponent } from './espauno.component';

describe('EspaunoComponent', () => {
  let component: EspaunoComponent;
  let fixture: ComponentFixture<EspaunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaunoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
