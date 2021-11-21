import { Component, OnInit, Input } from '@angular/core';
import { negate } from 'lodash';
import { Song } from 'src/app/types';
@Component({
  selector: 'tunes-song',
  templateUrl: './tunes-song.component.html',
  styleUrls: ['./tunes-song.component.scss']
})
export class TunesSongComponent implements OnInit {

  @Input() song: Song = {} as Song


  constructor() { }

  ngOnInit(): void {
  }

}
