import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatDialog} from '@angular/material/dialog';
import {UserModel} from '../../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['name', 'appointmentTime', 'notes', 'symptoms', 'emergency', 'status'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth, public dialog: MatDialog) {
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  // On input focus: setup filterPredicate to only filter by input column
  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: any, filter: string) => {
      const name = d['user'].name;
      const textToSearch = name && name.toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    this.db.collection<UserModel>('users').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'name':
            return item.user.name;
          default:
            return item[property];
        }
      };
      this.dataSource.sort = this.sort;
    });
  }


  trackByUid(index, item) {
    return item.uid;
  }

}
