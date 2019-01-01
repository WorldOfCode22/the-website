import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface ICard {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  localLink: boolean;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private cards: ICard[] = [
    {
      title: 'Calculator',
      subtitle: 'A simple JS calculator',
      content: 'A simple jQuery and bootstrap calculator that can do simple addition,' +
       ' subtraction, multiplication and division. This project is on Codepen.',
      image: `${environment.baseApiUrl}/images/JS-calc.png`,
      localLink: false,
      link: 'https://codepen.io/Bloodypizza17/full/dVBJgW'
    },
    {
      title: 'Productivity Clock',
      subtitle: 'A simple pomodoro timer',
      content: 'A simple pomodoro timer that lets you set lengths of time for work and break.' +
      ' This project was made with jQuery and custom CSS and is on Codepen.',
      image: `${environment.baseApiUrl}/images/timer.png`,
      localLink: false,
      link: 'https://codepen.io/Bloodypizza17/full/zPYvjP'
    },
    {
      title: 'Simon Game',
      subtitle: 'A web version of the classic simon game',
      content: 'The classic Simon game remade as a web application.' +
      'This game features normal and strict modes. Will you conquer this challenge of supreme annoyance?' +
      ' This project was made with jQuery and custom CSS and is on Codepen.',
      image: `${environment.baseApiUrl}/images/simon.png`,
      localLink: false,
      link: 'https://codepen.io/Bloodypizza17/full/YEQEMY'
    },
    {
      title: 'Instant Markdown Preview',
      subtitle: 'A web application that renders markdown as you type it!',
      content: 'This is a wonderfully simple and light tool for writing markdown.' +
      ' Markdown will be rendered as you type it so you can preview if the format is right before you push to' +
      ' GitHub. This project was made with React and bootstrap CSS and is on Codepen.',
      image: `${environment.baseApiUrl}/images/mark-down.png`,
      localLink: false,
      link: 'https://codepen.io/Bloodypizza17/full/ooqvjL'
    },
    {
      title: 'Chingu',
      subtitle: 'Chingu facilitates global collaboration on projects in a structure focused on improving remote development skills',
      content: 'I spent 2 months helping chingu release a prototype build for a major Devpost hackathon.' +
      ' I was mostly involved in using graphql to bring postgres and mongo together so that the benefits of each could be leveraged.' +
      ' I helped advise other things on both the back and frontend. To visit the hackathon page click visit below.' +
      ' To visit the website they use today go to chingu.io',
      image: `${environment.baseApiUrl}/images/chingu.png`,
      localLink: false,
      link: 'https://devpost.com/software/chingu-developer-network-ow1dhu'
    },
    {
      title: 'Password Provider (In Progress)',
      subtitle: 'A place to store your passwords',
      content: 'This application is a work in progress that when finished will allow to store and view their passwords.' +
      ' Clicking visit below will take you to it\'s github repository.',
      image: `${environment.baseApiUrl}/images/passwords.png`,
      localLink: false,
      link: 'https://github.com/WorldOfCode22/lockdown'
    }
  ];
  constructor() { }

  get Cards() { return this.cards; }

  ngOnInit() {

  }
}
