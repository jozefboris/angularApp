import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../types';
@Pipe({
  name: 'sogify'
})
export class SogifyPipe implements PipeTransform {

  transform(song: Song): string {
    return song.artist + ' - ' + song.title;
  }

}
