import {Component, OnInit} from '@angular/core';
import {Category} from '../../category.model';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})

export class ListCategoryComponent implements OnInit {

  private categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

}
