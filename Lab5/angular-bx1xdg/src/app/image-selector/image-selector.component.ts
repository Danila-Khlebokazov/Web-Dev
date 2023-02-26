import { Component, Input } from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})


export class ImageSelectorComponent {
  @Input() product!: Product;
  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.product.imageCollection.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.product.imageCollection.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
