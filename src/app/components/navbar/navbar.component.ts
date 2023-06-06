import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  // Variable to set the NavbarComponent title
  componentTitle: string = 'Navigation Bar';

  constructor() {
  }

  ngOnInit(): void {
  }
}
