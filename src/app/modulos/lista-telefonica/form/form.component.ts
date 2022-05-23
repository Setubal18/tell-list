import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TelefoneOpcoes, TelefoneOpcoesLabel } from 'src/app/shared/enums/telefoneOpcoes.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() emitform = new EventEmitter();
  public formTell: FormGroup = new FormGroup({});
  options = [
    {
    label: TelefoneOpcoesLabel.Casa,
    value: TelefoneOpcoes.Casa,
    },
    {
    label: TelefoneOpcoesLabel.Pessoal,
    value: TelefoneOpcoes.Pessoal,
    },
    {
    label: TelefoneOpcoesLabel.Trabalho,
    value: TelefoneOpcoes.Trabalho,
    },
]
  constructor() { }

  ngOnInit(): void {
    this.formInit();
  }


  formInit(){
    this.formTell = new FormGroup({
      nome: new FormControl('',Validators.required),
      telefone: new FormControl('',Validators.required),
      categoria:new FormControl(TelefoneOpcoes.Casa,Validators.required),
      id: new FormControl(this.generateId()),
    });
  }

  salvar(){
    this.emitform.emit(this.formTell.value);
    this.cancelar();
    console.log(this.formTell.value);
  }

  cancelar(){
    this.reset();
  }

  reset(){
    this.formTell.reset();
    this.formTell.controls["id"].setValue(this.generateId());
    this.formTell.controls["categoria"].setValue(TelefoneOpcoes.Categoria);
  }

  private generateId(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
