import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GetDataService } from './../../../services/get-data.service';
import { TableExample } from 'src/app/models/table';
import { SnackBarService } from './../../../services/snack-bar.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements AfterViewInit {
  public dataSource: Array<any> | undefined;

  public count:number =  0;
  public next:string | undefined;
  public previous: string | undefined;
  public offset: number = 0;
  public pageActual: number = 1
  public pages: number = 1 

  public tableConfig: TableExample = {
    results: [],
    count: 0,
    next: '',
    previous: '',
    offset: 15,
    pageActual: 1,
    pages: 1,
  }
  
  isLoadingResults = true;
  
  constructor(private title: Title, private dataService: GetDataService, private snackBarSrvc: SnackBarService) {}

  ngAfterViewInit(): void {
    this.title.setTitle('Paginación');    
    this.getData('https://pokeapi.co/api/v2/ability?offset=0&limit=15')
  }

  nextPage(): void{
    if ( this.next){
    this.getData(this.next)
    this.pageActual++}
  }
  prevPage():void {
    if ( this.previous){
    this.getData(this.previous)
    this.pageActual--}
  }

  getData(url: string ){
    this.isLoadingResults = true    
    this.dataService.getData(url).subscribe({
      next: (response:TableExample) => {  
        this.dataSource = response.results
        this.count = response.count
        this.next = response.next
        this.previous = response.previous
        this.isLoadingResults = false    
        this.pages = Math.round((this.count/15) + 0.4);        
      },
      error: (e:Error) =>{
        this.snackBarSrvc.openSnackbar("Ha ocurrido un error, intente más tarde" + e.message, 'snackbar-danger')
      }
    })
  }

  onSearch(value: any){}
  onKeyDownHandler(event:any){
    console.log('====================================');
    console.log(event);
    console.log('====================================');
  }
}
