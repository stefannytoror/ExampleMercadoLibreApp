import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  fetch() {
    this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=ipod#json`)
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

}
