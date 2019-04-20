import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { BackendService } from '@app/services/backend.service';
import { finalize } from 'rxjs/operators';

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  description: string;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  isLoading: boolean;
  displayedColumns: string[] = ['name', 'address', 'phone', 'description'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private backend: BackendService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.backend.getRestaurants()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}
