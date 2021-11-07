import { Component, OnInit } from '@angular/core';

interface Option {
  name: string;
  icon: string;
  link: string;
}

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

  options: Option[] = [
    { name: 'Resize', icon: 'fas fa-crop icon-2x', link: 'resize' },
    {
      name: 'To Grayscale Image',
      icon: 'fas fa-eye-dropper icon-2x',
      link: 'grayscale',
    },
    // { name: 'Rotate', icon: 'fas fa-undo icon-2x', link: 'rotate' },
  ];

  ngOnInit(): void {}
}
