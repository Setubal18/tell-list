import { Pipe, PipeTransform } from '@angular/core';
import { TelefoneOpcoes } from 'src/app/shared/enums/telefoneOpcoes.enum';
import { TelefoneOpcoesLabel } from '../../enums/telefoneOpcoes.enum';

@Pipe({
  name: 'translateCategoria'
})
export class TranslateCategoriaPipe implements PipeTransform {

  private readonly opcoes = {
    [TelefoneOpcoes.Casa]: TelefoneOpcoesLabel.Casa,
    [TelefoneOpcoes.Trabalho]: TelefoneOpcoesLabel.Trabalho,
    [TelefoneOpcoes.Pessoal]: TelefoneOpcoesLabel.Pessoal,

  }

  transform(value: any, ...args: unknown[]): unknown {
    const index = Number(value)
    if(value in this.opcoes) {
      return this.opcoes[index];
    }
    else {
    return `Categoria não encontrado`;
    }
  }
}
