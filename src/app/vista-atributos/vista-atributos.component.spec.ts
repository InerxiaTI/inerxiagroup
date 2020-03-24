import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAtributosComponent } from './vista-atributos.component';

describe('VistaAtributosComponent', () => {
  let component: VistaAtributosComponent;
  let fixture: ComponentFixture<VistaAtributosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAtributosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
