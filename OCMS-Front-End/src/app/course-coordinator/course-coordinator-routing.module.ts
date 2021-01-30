import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcfacultyComponent } from './cc-faculty/ccfaculty.component';
import { CchomeComponent } from './cc-home/cchome.component';
import { CcnoticeComponent } from './cc-notice/ccnotice.component';
import { CcscheduleComponent } from './cc-schedule/ccschedule.component';
import { CcstudentComponent } from './cc-student/ccstudent.component';
import { CcsubjectComponent } from './cc-subject/ccsubject.component';

const routes: Routes = [

  { path: 'cc/faculties', component: CcfacultyComponent},
  { path: 'cc/home', component:  CchomeComponent},
  { path: 'cc/notices', component:  CcnoticeComponent},
  { path: 'cc/schedule', component:  CcscheduleComponent},
  { path: 'cc/students', component:  CcstudentComponent},
  { path: 'cc/subjects', component:  CcsubjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCoordinatorRoutingModule { }
