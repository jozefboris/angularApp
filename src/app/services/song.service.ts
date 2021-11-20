import { Injectable } from '@angular/core';
import {Song} from "../types"
@Injectable({
  providedIn: 'root'
})
export class SongService {
 private songs: Song[] = [
    {id:1 , artist:'Jamal', name: 'Great songs'}
  ]


  constructor() {

   }

   getSongs(): Song[]{
     return this.songs

   }

   addSongs(name: string): void{
    this.songs.push({
      id: Math.max(...this.songs.map(s => s.id))+ 1,
      artist: name,
      name: name
    })
   }
}
