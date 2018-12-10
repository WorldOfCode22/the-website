import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private year = new Date().getFullYear();
  private apiVersion = '1.0.0 alpha';
  private websiteVersion = '1.0.0 alpha';
  constructor() { }

  get Year() { return this.year; }
  get ApiVersion() { return this.apiVersion; }
  get WebsiteVersion() { return this.websiteVersion; }

  ngOnInit() {
  }

}
