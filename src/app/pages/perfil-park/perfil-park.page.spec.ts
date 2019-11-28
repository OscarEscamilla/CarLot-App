import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilParkPage } from './perfil-park.page';

describe('PerfilParkPage', () => {
  let component: PerfilParkPage;
  let fixture: ComponentFixture<PerfilParkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilParkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
