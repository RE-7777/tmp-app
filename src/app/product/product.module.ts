import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from '../product/display/product-list/product-list.component';
import { ProductDetailComponent } from '../product/display/product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { EditDialogComponent } from './action/edit-dialog/edit-dialog.component';

//モーダル
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';

//Ag-grid
import { AgGridModule } from 'ag-grid-angular';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';


//product.component.htmlのrouter-outletで読み取るパス
const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent},
      { path: ':productId', component: ProductDetailComponent}
    ]
  } 
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    EditDialogComponent,
  ],
  imports: [
    //forRootはapp-routing.module.tsクラスで使用している
    RouterModule.forChild(routes),
    CommonModule,
    //モーダル
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    //Ag-grid
    AgGridModule.withComponents([]),
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    // ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
