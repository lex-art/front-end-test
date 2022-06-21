export interface TableExample {
    results: any[] | undefined;
    header?: {name:string}[]
    count: number,
    next?: string,
    previous?: string,
    offset?: number,
    pageActual?: number,
    pages?: number 
  }