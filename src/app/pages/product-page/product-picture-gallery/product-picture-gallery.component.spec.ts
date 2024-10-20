import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPictureGalleryComponent } from './product-picture-gallery.component';

describe('ProductPictureGalleryComponent', () => {
  let component: ProductPictureGalleryComponent;
  let fixture: ComponentFixture<ProductPictureGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPictureGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPictureGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
