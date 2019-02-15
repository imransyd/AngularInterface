import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  
/* we have essentially all that data from our file is being passed to the sub-component through 
this Input decorator, and it's placing it on a variable that is called aptList. */
  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();


  handleDelete(theApt: object){
    //console.log(theApt);
    this.deleteEvt.emit(theApt);
  }
  handleUpdate(theApt: object, labelName: string, newValue: string){
    this.updateEvt.emit({
      theApt: theApt,
      labelName: labelName,
      newValue: newValue,
    });
  }
}
