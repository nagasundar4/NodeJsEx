import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';
import { CounterComponent } from './app/counter/counter.component';
import { TodoListComponent } from './app/todo-list/todo-list.component';
import { SignalExampleComponent } from './app/signal-example/signal-example.component';  
import { ObservableExampleComponent } from './app/observable-example/observable-example.component'; // Import ObservableExampleComponent
import { PromiseExampleComponent } from './app/promise-example/promise-example.component'; // Import PromiseExampleComponent
import { ParentComponent } from './app/parent/parent.component';  // Import ParentComponent
import { ChildComponent } from './app/child/child.component';    // Import ChildComponent

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CounterComponent,
    TodoListComponent,
    SignalExampleComponent,
    ObservableExampleComponent, // Declare ObservableExampleComponent
    PromiseExampleComponent,
    ParentComponent,  // Declare ParentComponent
    ChildComponent // Declare HelloWorldComponent here
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
