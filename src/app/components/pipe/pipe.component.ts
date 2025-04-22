import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../Custom_pipe/na.pipe';
import { state } from '@angular/animations';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, CurrencyPipe, AsyncPipe, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstText: string = 'Angular';

  thirdText: string = 'This is the pipe section';

  currentDate: Date = new Date();

  currentTime: Observable<Date> = new Observable<Date>;

  currency:number = 100 ;

  student: any = {
    name: 'anand',
    city: 'pune',
    car: 'Defender',
    state: 'maharashtra'
  }

  // for Custom Pipe
  
  employee: any = {
    name: 'anand',
    city: 'pune',
    car: 'Defender',
    state: ''
    
  }

  constructor(){
    this.currentTime = interval(1000).pipe(map(()=>new Date()));
  }


}
