import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test',
      'https://omnivorescookbook.com/wp-content/uploads/2022/08/220728_Air-Fryer-Sweet-And-Sour-Chicken_3-400x400.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is test',
      'https://omnivorescookbook.com/wp-content/uploads/2022/08/220728_Air-Fryer-Sweet-And-Sour-Chicken_3-400x400.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
