import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserModel } from '../../../model/user.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  displayedColumns = ['title', 'scheduledDate', 'team1', 'team2'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFirestore) {
  }


  loading: Boolean = true;

  // tslint:disable-next-line:typedef
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  // On input focus: setup filterPredicate to only filter by input column
  // tslint:disable-next-line:typedef
  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: any, filter: string) => {
      const name = d.user.name;
      const textToSearch = name && name.toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.db.collection<UserModel>('events').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'title':
            return item.title;
          case 'team1':
            return item.team1.name;
          case 'team2':
            return item.team2.name;
          case 'scheduledDate':
            return item.scheduledDateTime;
          default:
            return item[property];
        }
      };
      this.dataSource.sort = this.sort;

      this.loading = false;
    });
  }


  // tslint:disable-next-line:typedef
  trackByUid(index, item) {
    return item.id;
  }

}
