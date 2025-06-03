import { Component, Input } from '@angular/core';
import { Canzoni } from '../models/song.model';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() canz! : Canzoni
  
  dettagli(){
    console.log(" Titolo: " + this.canz.title + " Data uscita: " + this.canz.data_uscita + " Durata: " + this.canz.durata)
  }

}
