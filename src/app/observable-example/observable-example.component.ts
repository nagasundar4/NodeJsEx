import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css'],
})
export class ObservableExampleComponent implements OnInit {
  observableData$: Observable<number[]> = of([]);

  ngOnInit() {
    // Example Observable that emits data every second
    this.observableData$ = timer(0, 1000).pipe(
      switchMap(() => of([1, 2, 3, 4, 5])),
      map((numbers) => numbers.map((num) => num * 2))
    );
  }
}
