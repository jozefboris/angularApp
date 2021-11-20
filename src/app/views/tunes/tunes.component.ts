import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from '../../types';

@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.scss']
})
export class TunesComponent implements OnInit {

  songs: Song[]= []

  constructor(private songService: SongService) { }


  getMusic(name: string):void {
    event?.preventDefault()
    this.songService.addSongs(name)

  }

  ngOnInit(): void {
    this.songs = this.songService.getSongs()
  }

}
