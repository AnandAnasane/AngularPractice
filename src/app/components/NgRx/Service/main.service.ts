import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  conunter$: Subject<number> = new Subject<number>

  constructor() { }
}
