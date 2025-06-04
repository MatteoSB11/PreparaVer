import { Component, Input } from '@angular/core';
import { Canzoni } from '../models/song.model';

@Component({
  selector: 'app-dettagli-album',
  standalone: true,
  imports: [],
  templateUrl: './dettagli-album.component.html',
  styleUrl: './dettagli-album.component.css'
})
export class DettagliAlbumComponent {
  @Input() detag! : Canzoni

}
