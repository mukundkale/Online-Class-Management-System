import { CreateFacultyComponent } from './../../shared/components/Faculty/create-faculty/create-faculty.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import { CreateStudentComponent } from 'src/app/shared/components/Student/create-student/create-student.component';

@Component({
  selector: 'app-ccfaculty',
  templateUrl: './ccfaculty.component.html',
  styleUrls: ['./ccfaculty.component.css'],
})
export class CcfacultyComponent implements OnInit {
    constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}
  addNewFaculty() {
    this.router.navigate(['/cc/create-new-faculty']);
  }

  onCreate() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = '60%';
    this.dialog.open(CreateFacultyComponent, dialogconfig);
  }
}
