import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMockComponent } from './buscar-mock.component';

describe('BuscarMockComponent', () => {
  let component: BuscarMockComponent;
  let fixture: ComponentFixture<BuscarMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
