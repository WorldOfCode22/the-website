import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  private isXSmall = false;
  private isSmall = false;
  private isBiggerThenSmall = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((val) => {
      if (val.breakpoints['(max-width: 599.99px)']) {
        this.isXSmall = true;
        this.isSmall = false;
        this.isBiggerThenSmall = false;
      } else if (val.breakpoints['(min-width: 600px) and (max-width: 959.99px)']) {
        this.isXSmall = false;
        this.isSmall = true;
        this.isBiggerThenSmall = false;
      } else {
        this.isXSmall = false;
        this.isSmall = false;
        this.isBiggerThenSmall = true;
      }
    });
  }

  get IsXSmall() { return this.isXSmall; }
  get IsSmall() { return this.isSmall; }
  get IsBiggerThenSmall() { return this.isBiggerThenSmall; }

  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy();
  }

}
