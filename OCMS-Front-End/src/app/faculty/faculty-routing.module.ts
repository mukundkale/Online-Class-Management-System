import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyAssignmentsComponent } from './faculty-assignments/faculty-assignments.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { FacultySubjectsComponent } from './faculty-subjects/faculty-subjects.component';

const routes: Routes = [
  { path: 'faculty/home', component: FacultyHomeComponent},
  { path: 'faculty/subjects', component: FacultySubjectsComponent },
  { path: 'faculty/assignments', component: FacultyAssignmentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
