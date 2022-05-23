import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListaTelefonicaService } from '../../shared/service/listaTelefonica.service';

@Component({
  selector: 'app-lista-telefonica',
  templateUrl: './lista-telefonica.component.html',
  styleUrls: ['./lista-telefonica.component.scss'],
})
export class ListaTelefonicaComponent implements OnInit {
  private listaSubscribtion?: Subscription;
  public lista: any[] = [];
  loading: boolean = false;
  constructor(
    private listaTelefonicaService: ListaTelefonicaService,
    private def: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getListas();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.listaSubscribtion?.unsubscribe();
  }

  async getListas() {
    this.loading = true;
    this.lista = await this.listaTelefonicaService.getLista();
    this.loading = false;
    this.def.detectChanges();
  }

  async salvar(event: any) {
    this.listaTelefonicaService.add(event);
    await this.getListas();
  }

  async excluir(event: any) {
   this.lista = await this.listaTelefonicaService.remove(event);
    this.def.detectChanges();
   }
}
