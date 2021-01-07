import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacklistLibComponent } from './packlist-lib.component';

describe('PacklistLibComponent', () => {
  let component: PacklistLibComponent;
  let fixture: ComponentFixture<PacklistLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacklistLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacklistLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
