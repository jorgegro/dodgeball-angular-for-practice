import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Jorge";
  active = true;
  totalTeams = 4;
  teams = [
    {
      teamName: 'Chupacabras',
      players: ['Michael', 'Daira', 'Tiny','Kenny', 'Johnny'],
      teamHome: 'Mission'
    },
    {
      teamName: 'Wrench Dodgers',
      players: ['Cesare', 'Erick', 'Victor', 'Jess', 'Jeremy'],
      teamHome: 'New York'
    },
    {
      teamName: 'Los Tamles',
      players: ['Jorge', 'Jacqueline', 'Steven', 'Hiram', 'Luis'],
      teamHome: 'Los Angeles'
    },
    {
      teamName: 'Weeaboos',
      players: ['Ernesto', 'Joshua', 'Emmanuel', 'Tony', 'Roxane'],
      teamHome: 'Tokyo'
    },
  ];
}
