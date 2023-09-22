import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
ProductsService
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplayHoverPause: true,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },

    },
    nav: true
  }
  categories:any=[];
  constructor(private _ProductsService:ProductsService) {

  }
  ngOnInit(): void {
      this._ProductsService.getCategories().subscribe((data)=>{
      this.categories=data.data;

      })
  }
}
