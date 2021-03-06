import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('productList')
  productList: ProductListComponent

  constructor (private backendService : BackendService){}

  ngAfterViewInit(): void {
  
    this.productList.products = this.backendService.getProduct()
  }
}
