import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDirectoryComponent } from './temp-directory.component';

describe('TempDirectoryComponent', () => {
  let component: TempDirectoryComponent;
  let fixture: ComponentFixture<TempDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
