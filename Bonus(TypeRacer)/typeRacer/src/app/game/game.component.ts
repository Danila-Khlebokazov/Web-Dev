import {Component, ElementRef, ViewChild} from '@angular/core';
import {TimeInterval} from "rxjs";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent {
  start = false;
  timer = 100;

  common_textes = [
    "Maurice loved his computer and loved internet dating. Very thorough and logical, he spent months scoring every respondent out of one thousand, cross-referencing virtues and failings; writing hundreds of emails, analysing their replies. Sadly, he never had time to go out and meet anyone, so he married his computer instead.",
    "What a task I've set myself! Fifty words! Now, twenty-six different letters in one sentence—that's an easy thing to do; \"the quick brown fox jumps over the lazy dog.\" But fifty words—no more, no less—that's not so easy. I can't do it! I give up! Sorry!",
    "Just little text"
  ]

  current_text = ""
  input_text = ""
  car_distanse = "15%"
  intervalId = 0;
  wpm = 0;



  startGame(){
    this.start = true;
    this.input_text = ""
    this.car_distanse = "15%"
    this.timer = 100;
    this.wpm = 0;

    this.current_text = this.common_textes[Math.floor(Math.random()*3)]
    this.intervalId = setInterval(() => {
      this.timer = this.timer - 1;
      console.log(this.timer)
      if(this.timer === 0) this.stopGame()
    }, 1000)
  }

  stopGame(){
    this.start = false;
    clearInterval(this.intervalId)
  }



  carAnimation(){
    this.car_distanse = (this.input_text.length/this.current_text.length)*75 + 15 + "%";
    let words = this.input_text.split(" ").length
    this.wpm = Math.round(words/(100-this.timer)*60);
    if (this.input_text.length/this.current_text.length >= 1){
      this.stopGame();
    }
  }

}
