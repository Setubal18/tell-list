import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista-telefonica', pathMatch: 'full' },
  { path: 'lista-telefonica', loadChildren:()=>import('./modulos/lista-telefonica/lista-telefonica.module').then(m=>m.ListaTelefonicaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
