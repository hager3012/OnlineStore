import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/services/products.service';
@Component({
  selector: 'app-product-detatils',
  templateUrl: './product-detatils.component.html',
  styleUrls: ['./product-detatils.component.css']
})
export class ProductDetatilsComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }
  productId:any;
  productDetails:any=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService,private toastr: ToastrService) {

  }
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((params)=>{
        this.productId=params.get('id')
      })
      this.toastr.success('Success', 'Welcome',{
        timeOut: 3000,
        progressBar:true
      });
      this._ProductsService.getProductDetails(this.productId).subscribe((data)=>{
        this.productDetails=data.data;

      })
  }
}
