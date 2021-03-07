import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  productsRef: AngularFireList<Product>;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private db: AngularFireDatabase) {
      this.productsRef = db.list('/product');
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  addProduct() :void { 
    console.log('start addProduct()')
    this.productsRef.push(new Product(
      {ticker: 'SBUX', name:'スターバックス', amount:180, price: 88.6, exchangeRate: 104.5, exchangeSpread: 0.2},
      ));   
    console.log('end addProduct()')    
}

}
