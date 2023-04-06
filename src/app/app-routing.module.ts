import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuglistComponent} from "./buglist/buglist.component";

const routes: Routes = [
  {path:'bug-list',component:BuglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
