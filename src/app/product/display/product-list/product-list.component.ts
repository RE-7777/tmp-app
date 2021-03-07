import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditDialogComponent } from '../../action/edit-dialog/edit-dialog.component';
import { Product } from '../../product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  animal!: string;
  name!: string;
  products: any;
  products$: Observable<Product[]>;
  productsRef: AngularFireList<Product>;
  rowData:any;
  private gridApi: any;
  private gridColumnApi: any;

  constructor(public dialog: MatDialog, private db: AngularFireDatabase,) {
    this.productsRef = db.list('/product');
    this.products$ = this.productsRef.valueChanges();
  }

  ngOnInit(): void {
    //firebaseのRealtimeDatabaseに格納されている「comment」のキーまで含むメタ情報取得(snapshotchanges)、Observableに変換
    this.products$.subscribe( data => {
      this.rowData = data;
    })   
  };

  

  

  

  
  
  columnDefs = [
    {headerName: '銘柄コード', field: 'ticker', sortable: true, filter: true, checkboxSelection: true },
    {headerName: '銘柄名', field: 'name', sortable: true, filter: true },
    {headerName: '数量', field: 'amount', sortable: true, filter: true},
    {headerName: '価格', field: 'price', sortable: true, filter: true},
    {headerName: '為替レート', field: 'exchangeRate', sortable: true, filter: true},
    {headerName: '為替スプレッド', field: 'exchangeSpread', sortable: true, filter: true}
  ];
  
  // rowData = [

  //   { id: "1", name: "iPhone", price: 35000, date: "2021-01-01", updatedate: "2021-04-20" },
  //   { id: "2", name: "Android", price: 32000, date: "2021-01-01", updatedate: "2021-04-20"},
  //   { id: "3", name: "Mac", price: 72000, date: "2021-01-01", }

  // ];

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.sizeToFit();
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }


  

}
