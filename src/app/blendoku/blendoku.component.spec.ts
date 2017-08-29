import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendokuComponent } from './blendoku.component';

describe('BlendokuComponent', () => {
  let component: BlendokuComponent;
  let fixture: ComponentFixture<BlendokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
