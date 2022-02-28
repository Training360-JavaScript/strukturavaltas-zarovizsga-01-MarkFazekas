import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import {CarComponent} from "./page/car/car.component";
import {CarEditorComponent} from "./page/car-editor/car-editor.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: "car/edit/:id",
    component: CarEditorComponent
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
