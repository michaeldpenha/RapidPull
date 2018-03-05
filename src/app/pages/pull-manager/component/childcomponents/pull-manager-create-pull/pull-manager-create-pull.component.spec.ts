import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullManagerCreatePullComponent } from './pull-manager-create-pull.component';

describe('PullManagerCreatePullComponent', () => {
  let component: PullManagerCreatePullComponent;
  let fixture: ComponentFixture<PullManagerCreatePullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullManagerCreatePullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullManagerCreatePullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
