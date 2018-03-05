import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullManagerPullConfirmationComponent } from './pull-manager-pull-confirmation.component';

describe('PullManagerPullConfirmationComponent', () => {
  let component: PullManagerPullConfirmationComponent;
  let fixture: ComponentFixture<PullManagerPullConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullManagerPullConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullManagerPullConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
