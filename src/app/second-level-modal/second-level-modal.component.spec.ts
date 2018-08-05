import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLevelModalComponent } from './second-level-modal.component';

describe('SecondLevelModalComponent', () => {
  let component: SecondLevelModalComponent;
  let fixture: ComponentFixture<SecondLevelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLevelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLevelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
