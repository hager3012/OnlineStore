import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/interfaces/products';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

    products:Products[]=[];
    constructor(private _ProductsService:ProductsService) {

    }
    ngOnInit():void{
    this._ProductsService.getProduct().subscribe({
      next:(data)=>{this.products=data.data;
      }
    })
    }
}
