import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarByServiceComponent } from './buscar-by-service.component';
import { HttpClientModule } from '@angular/common/http';

describe('BuscarByServiceComponent', () => {
  let component: BuscarByServiceComponent;
  let fixture: ComponentFixture<BuscarByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarByServiceComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
