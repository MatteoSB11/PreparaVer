import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Canzoni } from './models/song.model';
import { SongListComponent } from './song-list/song-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'sbarra-canzoniere';
  data! : Object;
   loading!: boolean;
   obs! :Observable<Canzoni[]>;
   http : HttpClient
   vettCanzoni : Canzoni[] = []

   constructor(http : HttpClient){this.http = http}

   makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Canzoni[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist')
    this.obs.subscribe(this.getData)
   }

   getData = (d : Canzoni[]) => {
    this.vettCanzoni = d
    this.loading = false
    console.log(this.vettCanzoni)
   }
  ngOnInit(): void {
  this.makeChiamata()
 }

}
