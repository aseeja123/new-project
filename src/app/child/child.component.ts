import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{

  @Input() inputChild : string = "";
constructor(){}


  ngOnChanges(changes: SimpleChanges): void {
  }
  
  name : string = "Parent";
  @Output() updatedName = new EventEmitter <string> ();

  postData(){
    this.updatedName.emit(this.name);
  }
}
