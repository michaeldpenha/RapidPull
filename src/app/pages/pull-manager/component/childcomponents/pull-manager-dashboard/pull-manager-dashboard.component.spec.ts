import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullManagerDashboardComponent } from './pull-manager-dashboard.component';

describe('PullManagerDashboardComponent', () => {
  let component: PullManagerDashboardComponent;
  let fixture: ComponentFixture<PullManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
