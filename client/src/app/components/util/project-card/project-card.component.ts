import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../routes/projects/projects.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';

export interface IDialogData {
  link: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  @Input() private card: ICard;

  get Title() { return this.card.title; }
  get Subtitle() { return this.card.subtitle; }
  get ImageLink() { return this.card.image; }
  get Content() { return this.card.content; }
  get AppLink() { return this.card.link; }
  get LocalLink() { return this.card.localLink; }

  // Should only be used in testing
  set Card(data: ICard) { this.card = data; }

  private openDialog() {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '500px',
      data: {link: this.AppLink}
    });

    dialogRef.afterClosed().subscribe((val) => {
      if (val === 'OK') {
        window.open(this.AppLink, '_blank');
      }
    });
  }

  VisitOnClick() {
    if (this.LocalLink) {
      this.router.navigate([this.AppLink]);
    } else {
      this.openDialog();
    }
  }

  ngOnInit() {
  }

}
