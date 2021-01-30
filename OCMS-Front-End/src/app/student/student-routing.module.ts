import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentScheduleComponent } from './student-schedule/student-schedule.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';

const routes: Routes = [
  { path: 'student/home', component: StudentHomeComponent},
  { path: 'student/subjects', component:  StudentSubjectsComponent},
  { path: 'student/schedule', component:  StudentScheduleComponent},
  { path: 'student/assignments', component: StudentAssignmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
