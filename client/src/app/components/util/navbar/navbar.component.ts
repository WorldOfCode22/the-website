import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

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
