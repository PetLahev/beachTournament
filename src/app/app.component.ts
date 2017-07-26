import { Player } from './player';
import { Component } from '@angular/core';

 const PLAYERS: Player[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco'  },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta'  },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama'  },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beach Milovice';
  turnamentDate: Date = new Date(2017, 8, 2, 10, 0, 0);
  formattedDate: any = this.turnamentDate.toLocaleDateString('cs-cz');
  remains: number;
  players = PLAYERS;
  selectedPlayer: Player;

  constructor() {
    this.remains = this.turnamentDate.valueOf() - Date.now().valueOf();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}
