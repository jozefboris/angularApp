import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tunes',
  //templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.scss'],
  template: ` <h1>Tunes<h1>
              <tunes-search-form (searchValue)="changeSong($event)"></tunes-search-form>
              <tunes-list [newSong]="newSong"></tunes-list>
              `
})
export class TunesComponent implements OnInit {

 // songs: Song[]= []
  newSong: string = ''

  constructor() { }

/*
  getMusic(name: string):void {

    // aby sa nerefreshovala stranka
   // event?.preventDefault()
    this.songService.addSongs(name)

  }

  ngOnInit(): void {
    this.songs = this.songService.getSongs()
  }
*/
ngOnInit(): void {}

changeSong(value: string){
  this.newSong = value

}

}


