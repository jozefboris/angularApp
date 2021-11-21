import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from '../../../types';

@Component({
  selector: 'tunes-list',
  templateUrl: './tunes-list.component.html',
  styleUrls: ['./tunes-list.component.scss']
})
export class TunesListComponent implements OnInit {
  songs: Song[] = []
  @Input() newSong: string = ''

  constructor(private songService: SongService) { }

  ngOnInit(): void {
   // this.songs = this.songService.getSongs("ddd")
   this.songService.newSongHaveArrived.subscribe((data: Song[]) => {
    this.songs = data
   })
  }


  /*ngOnChanges(changes: any): void{
    this.songService.addSongs(changes.newSong.currentValue)
  }*/

}
