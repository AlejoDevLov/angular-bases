import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 2000,
      id: 'abc',
    }
  ];

  @Output('idToDelete')
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();


  deletingCharacter( id?:string ):void {
    // debugger;
    if( !id ) return;
    this.onDeleteCharacter.emit(id);
  }

}
