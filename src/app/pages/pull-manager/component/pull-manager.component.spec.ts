import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullManagerComponent } from './pull-manager.component';

describe('PullManagerComponent', () => {
  let component: PullManagerComponent;
  let fixture: ComponentFixture<PullManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
