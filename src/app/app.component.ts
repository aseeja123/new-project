import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    alert('Welcome ');
  }

  title = 'new-project';

forChild: string = "Hello Child";
forParent : string = "";

getData(name : any){
this.forParent = name;
}
}
