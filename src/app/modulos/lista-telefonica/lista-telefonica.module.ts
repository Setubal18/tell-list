import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTelefonicaRoutingModule } from './lista-telefonica-routing.module';
import { ListaTelefonicaComponent } from '../lista-telefonica/lista-telefonica.component';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { TranslateCategoriaPipeModule } from 'src/app/shared/pipes/translate-categoria.pipe/translate-categoria.pipe.module';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ListaTelefonicaComponent,
    FormComponent,
    ListaComponent,
  ],
  imports: [
    CommonModule,
    ListaTelefonicaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatTableModule,
    TranslateCategoriaPipeModule,
    MatSortModule,
    MatIconModule
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListaTelefonicaModule { }
