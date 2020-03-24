import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNosotrosComponent } from './vista-nosotros.component';

describe('VistaNosotrosComponent', () => {
  let component: VistaNosotrosComponent;
  let fixture: ComponentFixture<VistaNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
