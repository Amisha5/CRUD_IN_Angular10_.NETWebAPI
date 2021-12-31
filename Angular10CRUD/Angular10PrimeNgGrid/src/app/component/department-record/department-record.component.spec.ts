import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentRecordComponent } from './department-record.component';

describe('DepartmentRecordComponent', () => {
  let component: DepartmentRecordComponent;
  let fixture: ComponentFixture<DepartmentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
