import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTelefonicaComponent } from './lista-telefonica.component';

const routes: Routes = [
  { path: '', component: ListaTelefonicaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTelefonicaRoutingModule { }
