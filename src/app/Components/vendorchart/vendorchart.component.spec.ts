import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorchartComponent } from './vendorchart.component';

describe('VendorchartComponent', () => {
  let component: VendorchartComponent;
  let fixture: ComponentFixture<VendorchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
