import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../service/match.service';
import {MatchModel} from '../../model/match.model';
import {TeamModel} from '../../model/team.model';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  constructor(private matchService: MatchService) {
  }

  ngOnInit(): void {
  }

  addNewMatch() {
    this.matchService.addEvent({
      id: null,
      team1: {
        name: 'India',
        icon: 'https://cdn.countryflags.com/thumbs/india/flag-400.png'
      } as TeamModel,
      team2: {
        name: 'Pakistan',
        icon: 'https://cdn.webshopapp.com/shops/94414/files/54939500/pakistan-flag-icon-free-download.jpg'
      } as TeamModel,
      scheduledDateTime: Timestamp.fromMillis(Date.UTC(2020, 12, 4, 12, 50, 0)),
      addedDateTime: Timestamp.now()
    } as MatchModel).then(_ => {
      console.log('new event added')
    });
  }

}
