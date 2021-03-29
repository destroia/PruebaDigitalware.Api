import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaProductosComponent } from './factura-productos.component';

describe('FacturaProductosComponent', () => {
  let component: FacturaProductosComponent;
  let fixture: ComponentFixture<FacturaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
