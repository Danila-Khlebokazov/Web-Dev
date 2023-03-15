import { Component } from '@angular/core';
import {Category, categories} from "../categories";

@Component({
  selector: 'app-categoty-list',
  templateUrl: './categoty-list.component.html',
  styleUrls: ['./categoty-list.component.css']
})
export class CategotyListComponent {
  categories = categories

  currentCategory = categories[0];

  adCategory: Category = {name: "", products: []};

  changeCategory(cat : Category){
    this.currentCategory = cat
    if(this.currentCategory.name == 'smart-watches'){
      this.adCategory = categories[3]
    }
    else if(this.currentCategory.name == 'audio-systems'){
      this.adCategory = categories[2]
    }
    else{
      this.adCategory = {name: "", products: []};
    }
  }


}
