import { Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileUploaderService {
@Output() fileReaderTrigger: EventEmitter<any> = new EventEmitter();
@Output() updatefileTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
