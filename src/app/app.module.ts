import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routerConfig";
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FooterComponent } from './footer/footer.component';
import { TasksAddComponent } from './tasks-add/tasks-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskViewComponent,
    HeaderComponent,
    FourOhFourComponent,
    FooterComponent,
    TasksAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
