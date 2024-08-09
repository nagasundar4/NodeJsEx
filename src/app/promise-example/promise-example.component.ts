import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-example',
  templateUrl: './promise-example.component.html',
  styleUrl: './promise-example.component.css'
})
export class PromiseExampleComponent {
  promiseData: string | null = null;
  isLoading = true;

  ngOnInit() {
    this.getDataFromPromise()
      .then(data => {
        this.promiseData = data;
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      });
  }

  getDataFromPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data loaded from Promise!');
      }, 2000);
    });
  }
}
