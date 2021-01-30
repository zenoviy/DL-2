import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSinglePageComponent } from './shop-single-page.component';

describe('ShopSinglePageComponent', () => {
  let component: ShopSinglePageComponent;
  let fixture: ComponentFixture<ShopSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
