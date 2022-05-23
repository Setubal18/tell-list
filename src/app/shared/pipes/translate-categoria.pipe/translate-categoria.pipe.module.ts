import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateCategoriaPipe } from './translate-categoria.pipe';



@NgModule({
  declarations: [
    TranslateCategoriaPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TranslateCategoriaPipe
  ]
})
export class TranslateCategoriaPipeModule { }
