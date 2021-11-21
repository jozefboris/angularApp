import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from '../../../types';
import { debounce } from 'lodash-es';
import { query } from '@angular/animations';

@Component({
  selector: 'tunes-search-form',
  templateUrl: './tunes-search-form.component.html',
  styleUrls: ['./tunes-search-form.component.scss']
})
export class TunesSearchFormComponent implements OnInit {

  songs: Song[]= []
  @Output()  searchValue = new EventEmitter<string>()

  constructor(private songService: SongService) { }


  getMusic(name: string):void {

    // aby sa nerefreshovala stranka
    event?.preventDefault()
    this.songService.getSongs(name)

  }

  ngOnInit(): void {
  }

  search = debounce((query: string):void => {
    this.getMusic(query)

  },500)

}
