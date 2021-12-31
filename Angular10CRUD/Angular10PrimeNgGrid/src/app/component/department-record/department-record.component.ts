import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-record',
  templateUrl: './department-record.component.html',
  styleUrls: ['./department-record.component.css']
})
export class DepartmentRecordComponent implements OnInit {
  display:boolean;
  DepartmentList=[];
  Modaltitle:string;
  ActivatedAddEditDepComp:boolean=false;
  dept:any;
  displayUpdate: boolean;
  constructor(private service:DepartmentService,public fb:FormBuilder) { }
  Department:FormGroup;
  DepartmentUpdateRecord:FormGroup;

  DepartmentId:string;
  DepartmentName:string;

  ngOnInit(): void {
   
    this.Department=this.fb.group({
      departmentName:['',Validators.required]
    })

    this.DepartmentUpdateRecord=this.fb.group({
      departmentId:[''],
      departmentName:['',Validators.required]
    })
    
    this.getDepartmentDetails();
  }
  getDepartmentDetails()
  {
    this.service.getDepartmentList().subscribe(data=>
      {
        this.DepartmentList=data;
        });
     }
     
     closeClick()
     {
       this.ActivatedAddEditDepComp=false;
       this.getDepartmentDetails();
     }

     AddModalDialog() {
      this.display = true;
    }

     Submit(){
      this.service.addDepartment(this.Department.value).subscribe();
      window.location.reload();
    }
    deleteDept(val:any)
    {
      this.service.deleteDepartment(val).subscribe();
      window.location.reload();
    }
    showUpdateModal(val:any) {
      this.displayUpdate = true;
      console.log(val);
      this.DepartmentUpdateRecord.setValue({
        departmentId:val['departmentId'],
        departmentName:val['departmentName']
  
      });
    }
    editRecord(val:any)
     {
      this.service.updateDepartment(val).subscribe();
      window.location.reload();
     }

}
