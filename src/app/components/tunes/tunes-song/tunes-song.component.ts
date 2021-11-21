import { Component, OnInit, Input } from '@angular/core';
import { negate } from 'lodash';
import { Song } from 'src/app/types';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'tunes-song',
  templateUrl: './tunes-song.component.html',
  styleUrls: ['./tunes-song.component.scss'],
  animations: [
		trigger('songAnim', [
			transition(':enter', [
				style({
					opacity: 0,
					transform: 'scale(0.85)'
				}),
				animate('0.2s ease')
			]),
			transition(':leave', [
				animate(
					'0.2s ease',
					style({
						opacity: 0,
						transform: 'scale(0.85)'
					})
				)
			])
		])
	]
})
export class TunesSongComponent implements OnInit {

  @Input() song: Song = {} as Song


  constructor() { }

  ngOnInit(): void {
  }

}
