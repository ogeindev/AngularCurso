import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGoogleComponent } from './buscar-google.component';
import { HttpClientModule } from '@angular/common/http';

describe('BuscarGoogleComponent', () => {
  let component: BuscarGoogleComponent;
  let fixture: ComponentFixture<BuscarGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarGoogleComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
