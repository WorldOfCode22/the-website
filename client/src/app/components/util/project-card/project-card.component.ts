import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../routes/projects/projects.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() private card: ICard;

  get Title() { return this.card.title; }
  get Subtitle() { return this.card.subtitle; }
  get ImageLink() { console.log(this.card); return this.card.image; }
  get Content() { return this.card.content; }
  get AppLink() { return this.card.link; }

  ngOnInit() {
  }

}
