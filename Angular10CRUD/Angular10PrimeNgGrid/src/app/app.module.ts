import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { DepartmentRecordComponent } from './component/department-record/department-record.component';
import { DepartmentService } from './component/department.service';
import { DialogModule } from 'primeng/dialog';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PasswordModule,
    DividerModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    NgbModule,
    TableModule,
    DialogModule,
    InputTextModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
