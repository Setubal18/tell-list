import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnInit, SimpleChanges, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ListaTelefonicaService } from '../../../shared/service/listaTelefonica.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() lista: any[] = [];
  @Output() emitExclusao: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['nome', 'telefone', 'categoria', 'acoes'];
  dataSource = new MatTableDataSource(this.lista);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private listaTelefonicaService: ListaTelefonicaService
    ) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
    if(changes["lista"].currentValue) {
      this.dataSource = new MatTableDataSource(changes['lista'].currentValue)
    }
    this.lista = changes['lista'].currentValue;
    this.dataSource = new MatTableDataSource(this.lista);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  excluir(element:any){
    this.emitExclusao.emit(element)
  }

  editar(element:any){
    console.log(`editar`,element)
  }

  announceSortChange(sortState: any) {
    console.log(`Sort changed: column=${sortState.active}, direction=${sortState.direction}`);
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Ordenando ${sortState.direction}`);
    } else {
      this._liveAnnouncer.announce('Removendo ordenação');
    }
  }

}
