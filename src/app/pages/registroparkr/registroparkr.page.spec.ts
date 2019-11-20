import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroparkrPage } from './registroparkr.page';

describe('RegistroparkrPage', () => {
  let component: RegistroparkrPage;
  let fixture: ComponentFixture<RegistroparkrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroparkrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroparkrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
