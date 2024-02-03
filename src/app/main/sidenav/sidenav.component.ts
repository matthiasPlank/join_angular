import { Component } from '@angular/core';
import { ActiveSelectionService } from '../../../services/active-selection.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {


  constructor(private activeSelectionService:ActiveSelectionService){

  }

  changeSelection(newSelection:string){
    this.activeSelectionService.activeSelection = newSelection; 
  }

}
