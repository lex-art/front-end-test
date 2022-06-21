import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class  SpinnerService {
    isLoaging$ = new Subject<boolean>();
    showSpinner(): void {
        this.isLoaging$.next(true);
    }
    hideSpinner(): void {
        this.isLoaging$.next(false);
    }
}