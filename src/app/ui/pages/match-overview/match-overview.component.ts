import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserModel} from '../../../model/user.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.css']
})
export class MatchOverviewComponent implements OnInit {
  event: any;
  isLoading = true;

  displayedColumns = ['name', 'predictedTeamName', 'predictedTime'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private db: AngularFirestore) {
    this.activatedRoute.params.subscribe(data => {
      this.db.collection('events').doc(data.id.toString()).get().pipe(take(1)).toPromise().then(eventData => {
        this.event = eventData.data();
        this.loadData();
      });
    });
  }
  ngOnInit(): void {
  }
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

  loadData(): void {
    this.db.collection<UserModel>('predictions', ref => ref.where('match.id', '==', this.event.id)).valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'name':
            return item.user.name;
          case 'predictedTeamName':
            return item.predictedTeamName;
          case 'predictedTime':
            return item.predictedTime;
          default:
            return item[property];
        }
      };
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }
}
