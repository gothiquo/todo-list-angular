import {Routes} from "@angular/router";
import {TasksListComponent} from "./tasks-list/tasks-list.component";
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";
import {TasksAddComponent} from "./tasks-add/tasks-add.component";

export const appRoutes: Routes = [
  {path: 'tasks', component: TasksListComponent},
  {path: 'tasks/add', component: TasksAddComponent},
  {path: 'tasks/edit', component: TasksListComponent},
  {path: 'tasks/delete', component: TasksListComponent},
  { path: '', component: TasksListComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
