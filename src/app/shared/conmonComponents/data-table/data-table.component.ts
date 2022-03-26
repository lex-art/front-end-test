import { AfterViewInit, Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GetDataService } from './../../../services/get-data.service';
import { TableExample } from 'src/app/models/table';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styles: [`
    .full-width-table {
      width: 100%;
    }
  `]
})
export class DataTableComponent implements AfterViewInit {
  @Input() configTable: TableExample | undefined
  public dataSource: Array<any> | undefined;

  public count:number| undefined =  0;
  public next:string | undefined;
  public previous: string | undefined;
  public offset: number = 0;
  public pageActual: number = 1
  public pages: number = 1 
  
  isLoadingResults = true;
  
  constructor(private title: Title, private dataService: GetDataService) {}

  ngAfterViewInit(): void {
    this.title.setTitle('Paginación');
    console.log('====================================');
    console.log({ configTable: this.configTable });
    console.log('====================================');
    this.dataSource = this.configTable?.results
        this.count = this.configTable?.count
        this.next = this.configTable?.next
        this.previous = this.configTable?.previous
        this.isLoadingResults = false    
        this.pages = Math.round((this.count || 0  /15) + 0.4); 
    
  }

  nextPage(): void{
    console.log('====================================');
    console.log("next page", this.next);
    console.log('====================================');
    if ( this.next){
    /* this.getData(this.next) */
    this.pageActual++}
  }
  prevPage():void {
    console.log('====================================');
    console.log("prev page", this.previous);
    console.log('====================================');
    if ( this.previous){
  /*   this.getData(this.previous) */
    this.pageActual--}
  }

  getData(response: TableExample ){
    /* this.isLoadingResults = true    
    this.dataService.getData(url).subscribe({
      next: (response: TableExample) => {   */
        this.dataSource = response.results
        this.count = response.count
        this.next = response.next
        this.previous = response.previous
        this.isLoadingResults = false    
        this.pages = Math.round((this.count/15) + 0.4);  
      /* },
      error: (e) =>{
        console.log('====================================');
        console.log(e);
        console.log('====================================');
      }
    }) */
  }
}
