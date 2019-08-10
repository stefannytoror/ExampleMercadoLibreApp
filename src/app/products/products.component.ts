import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products = null;
  private seller = null

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  fetchProduct(item) {
    this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=${item}#json`)
    .subscribe(
      result => {
        this.products = result;
        console.log(this.products)
      },
      error => {
        console.log("Error");
      }
    )
  }

  fetchSeller(id) {
    this.http.get(`https://api.mercadolibre.com/users/${id}`)
    .subscribe(
      result => {
        return result
      },
      error => {
        console.log("Error");
      }
    )
  }

}
