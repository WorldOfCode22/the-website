import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private fullLayout = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  get FullLayout() { return this.fullLayout; }
  // only for testing
  set FullLayout(isOpen: boolean) { this.fullLayout = isOpen; }
  @ViewChild('dropdown') ChildMenu: MatMenu;
  ngOnInit() {
    if (window.screen.width > 999) { this.fullLayout = true; }
    this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((val) => {
      if (val.matches) {
        this.fullLayout = true;
      } else { this.fullLayout = false; }
    });
  }

  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy();
  }

}
