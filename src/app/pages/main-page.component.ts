import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  menu: MenuItem[] = [];
  ngOnInit(): void {
    this.menu = [
      {
        label: '',
        icon: 'pi pi-bars'
      }
    ]
  }

  onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement> event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
        nodeElement.click();
        event.preventDefault();
    }
}
}
