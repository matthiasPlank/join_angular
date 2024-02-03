import { Component } from '@angular/core';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HeaderComponent } from "./header/header.component";
import { SummaryComponent } from "./summary/summary.component";
import { BoardsComponent } from './boards/boards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NgIf } from '@angular/common';
import { ActiveSelectionService } from '../../services/active-selection.service';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [SidenavComponent, HeaderComponent, SummaryComponent, BoardsComponent, ContactsComponent, AddTaskComponent, NgIf]
})
export class MainComponent {
  

    constructor(public activeSelectionService:ActiveSelectionService  ){

    }


}
