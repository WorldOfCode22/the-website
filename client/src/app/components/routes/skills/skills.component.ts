import { Component, OnInit } from '@angular/core';

export interface ISkill {
  skill: string;
  confidence: number;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private skills: ISkill[] = [
    {
      skill: 'Node.js',
      confidence: 8
    },
    {
      skill: 'Express.js',
      confidence: 7
    },
    {
      skill: 'React.js',
      confidence: 8
    },
    {
      skill: 'Bootstrap CSS/JS',
      confidence: 9
    },
    {
      skill: 'Mongodb',
      confidence: 7
    },
    {
      skill: 'Angular',
      confidence: 7
    },
    {
      skill: 'Graphql-express',
      confidence: 7
    },
    {
      skill: 'Digital Ocean Droplets',
      confidence: 6
    },
    {
      skill: 'jQuery',
      confidence: 8
    },
    {
      skill: 'HTML',
      confidence: 9
    },
    {
      skill: 'CSS (No Framework)',
      confidence: 5
    }
  ];
  constructor() { }

  get Skills() { return this.skills; }
  ngOnInit() {
  }

}
