import { Component } from '@angular/core';

export interface DCTElem {
  id: number;
  store_name: string;
  last_update: string;
  store_id: number;
  price_id: number;
  btn_update: boolean;
}

const ELEMENT_DATA: DCTElem[] = [
  { id: 1, store_name: 'Hydrogen', last_update: "12.12.2020", store_id: 1, price_id: 1, btn_update: true },
  { id: 2, store_name: 'Helium', last_update: "12.12.2020", store_id: 2, price_id: 1, btn_update: true },
  { id: 3, store_name: 'Lithium', last_update: "12.12.2020", store_id: 3, price_id: 1, btn_update: true },
  { id: 4, store_name: 'Beryllium', last_update: "12.12.2020", store_id: 4, price_id: 1, btn_update: true },
  { id: 5, store_name: 'Boron', last_update: "12.12.2020", store_id: 5, price_id: 1, btn_update: true },
  { id: 6, store_name: 'Carbon', last_update: "12.12.2020", store_id: 6, price_id: 1, btn_update: true },
  { id: 7, store_name: 'Nitrogen', last_update: "12.12.2020", store_id: 7, price_id: 1, btn_update: true },
  { id: 8, store_name: 'Oxygen', last_update: "12.12.2020", store_id: 8, price_id: 1, btn_update: true },
  { id: 9, store_name: 'Fluorine', last_update: "12.12.2020", store_id: 9, price_id: 1, btn_update: true },
  { id: 10, store_name: 'Neon', last_update: "12.12.2020", store_id: 10, price_id: 1, btn_update: true },
];
@Component({
  selector: 'app-dct-management',
  templateUrl: './dct-management.component.html',
  styleUrls: ['./dct-management.component.scss'],
})
export class DCTManagementComponent {
  displayedColumns: string[] = ['store_name', 'last_update', 'store_id', 'price_id', 'btn_update'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<DCTElem>();
  selectedRowIndex = -1;

  highlight(row: { id: number; }) {
    this.selectedRowIndex = row.id;
  }
}
