import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.page.html',
  styleUrls: ['./listening.page.scss'],
})
export class ListeningPage implements OnInit {
  currentSongPath = "../../../assets/music/Fly_Me_To_The_Moon.mp3"
  currentImg: string = "../../../assets/music/Fly_Me_To_The_Moon.jpg";
  path: string = "../../../assets/";
  liked: string = "heart-outline"
  playing = false;
  audio = new Audio();
  songs: any[] = [1, 2, 3, 4, 5, 6, 7, 8];
  ratings = ["Star.svg", "Star.svg", "Star.svg", "Star.svg", "Star.svg"]
  current_rating = 0;
  constructor() { }

  ngOnInit() {

  }

  playAudio(song: string | number) {
    if (!this.playing) {
      this.playing = true;
      this.audio.src = this.currentSongPath;
      this.audio.load();
      this.audio.currentTime = 60
      this.audio.play();

    } else {
      this.playing = false;
      this.audio.pause();
    }

  }
  rate(rating: number) {
    for (let i = 0; i <= 4; i++) {
      this.ratings[i] = "Star.svg";

    }

    console.log(rating)
    if (rating == this.current_rating) {
      this.current_rating = 0;
      return

    } else {
      for (let i = 0; i <= rating; i++) {
        this.ratings[i] = "Star_filled.svg"
      }
      this.current_rating = rating;
    }
  }

  onScroll(event:Event){

      this.playing = true;
      this.audio.src = this.currentSongPath;
      this.audio.load();
      this.audio.currentTime = 60
      this.audio.play();
    }
  

    like(){
      if (this.liked == "heart"){
        this.liked = "heart-outline";

      } else {
        this.liked = "heart";
        
      }

    }
}
