import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  playing: boolean = false;
  currentSongPath: string = "../../../assets/music/SalmonLikeTheFish - Shenandoah.mp3";
  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  playAudio(){
  
    console.log(this.playing)
    if (!this.playing) {
      this.playing = true;
      this.audio.src = this.currentSongPath;
      this.audio.load();
      this.audio.currentTime = 40
      this.audio.play();

    } else {
      this.playing = false;
      this.audio.pause();
    }

  }
}
