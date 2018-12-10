import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  OnActivate() {
    const scrollToTop = window.setInterval(() => {
      const yPostilion = window.pageYOffset;
      if (yPostilion > 0) {
          window.scrollTo(0, yPostilion - 20);
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 20);
  }
}
