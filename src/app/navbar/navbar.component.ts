import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarOpened = false;
  pageOption = 0;
  constructor() {
    this.navbarOpened = false;
  }

  options = [
    { name: 'Resize', icon: 'fas fa-crop icon-2x' },
    { name: 'To Grayscale Image', icon: 'fas fa-eye-dropper icon-2x' },
    { name: 'Rotate', icon: 'fas fa-undo icon-2x' },
  ];

  ngOnInit(): void {}
}
