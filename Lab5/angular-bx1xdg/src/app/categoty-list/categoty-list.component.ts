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

  changeCategory(cat : Category){
    this.currentCategory = cat
  }


}
