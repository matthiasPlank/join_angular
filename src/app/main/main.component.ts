import { Component } from '@angular/core';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HeaderComponent } from "./header/header.component";
import { SummaryComponent } from "./summary/summary.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [SidenavComponent, HeaderComponent, SummaryComponent]
})
export class MainComponent {

}
