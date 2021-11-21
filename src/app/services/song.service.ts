import { Injectable, Output, EventEmitter } from '@angular/core';
import {Song, SongFroITunes} from "../types"
import { iTunesService } from './itunes.service';
@Injectable({
  providedIn: 'root'
})
export class SongService {
  @Output() newSongHaveArrived: EventEmitter<any> = new EventEmitter()
 private songs: Song[] = []


  constructor(private  iTunes: iTunesService) {

   }

   getSongs(query: string){
     if(query){
     this.iTunes.getData(query).subscribe(
       // next
       (data: any) => {
          this.songs = data.results.filter(
            (song: SongFroITunes) => song.kind ==='song'
          ).map((song: SongFroITunes) => this.extractData(song))
          this.newSongHaveArrived.emit(this.songs)
       },

       // error
       (error: any) => {
        console.error(error)
     },

     // compplette
     () => {
      console.info('we are done here')
   }
     )
     }


   }

  /*addSongs(name: string): void{
    this.songs.push({
      id: Math.max(...this.songs.map(s => s.id))+ 1,
      artist: name,
      name: name
    })
   }*/

   	/**
	 * extractData
	 */
	public extractData({
		trackId: id,
		artistName: artist,
		previewUrl: audioFile,
		artworkUrl100: artwork,
		trackName: title,
		collectionName: album
	}: SongFroITunes) {
		return { id, artist, audioFile, artwork, title, album } as Song
	}
}
