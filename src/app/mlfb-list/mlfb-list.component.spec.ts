import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlfbListComponent } from './mlfb-list.component';

describe('MlfbListComponent', () => {
  let component: MlfbListComponent;
  let fixture: ComponentFixture<MlfbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlfbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlfbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
