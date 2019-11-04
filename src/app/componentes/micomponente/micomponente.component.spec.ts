import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicomponenteComponent } from './micomponente.component';

describe('MicomponenteComponent', () => {
  let component: MicomponenteComponent;
  let fixture: ComponentFixture<MicomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicomponenteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
