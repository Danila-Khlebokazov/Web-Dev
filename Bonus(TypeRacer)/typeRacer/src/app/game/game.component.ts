import {Component, ElementRef, ViewChild} from '@angular/core';

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
    "What a task I’ve set myself! Fifty words! Now, twenty-six different letters in one sentence—that’s an easy thing to do; \"the quick brown fox jumps over the lazy dog.\" But fifty words—no more, no less—that’s not so easy. I can’t do it! I give up! Sorry!"
  ]

  current_text = ""
  input_text = ""

  startGame(){
    this.start = true;
    this.input_text = ""

    this.current_text = this.common_textes[0]
  }

  stopGame(){
    this.start = false;
  }

  carAnimation(){

  }

}
