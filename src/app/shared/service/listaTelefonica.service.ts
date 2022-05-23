import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { StorageProvider } from '../provider/storage.provider';

@Injectable({providedIn: 'root'})
export class ListaTelefonicaService {

  private _lista: any[] = [];
  public lista$: Subject<any> = new Subject<any>();
  constructor(
    private storage: StorageProvider,
  ) { }

  async getLista(){
    this._lista = await this.storage.get('listaTelefonica') || [];
    this.lista$.next(this._lista);
    return this._lista;
  }

  async add(item: any){
    this._lista.push(item);
    await this.storage.set('listaTelefonica', this._lista);
    this.lista$.next(this._lista);
  }

  async remove(item: any){
    this._lista = this._lista.filter(i => i.id !== item.id);
    await this.storage.set('listaTelefonica', this._lista);
    this.lista$.next(this._lista);
    return this._lista;
  }
}
