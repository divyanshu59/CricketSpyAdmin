import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../service/match.service';
import { MatchModel } from '../../../model/match.model';
import { TeamModel } from '../../../model/team.model';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  scheduledDate = new Date();
  team1Name: string = '';
  team2Name: string = '';
  sportName: string = '';
  featureImage: string = '';
  team1Image: string = '';
  team2Image: string = '';

  constructor(private matchService: MatchService, private imageService: ImageService) {
  }

  ngOnInit(): void {
  }

  addNewMatch() {
    this.matchService.addEvent({
      id: null,
      team1: {
        name: this.team1Name,
        icon: this.team1Image,
      } as TeamModel,
      team2: {
        name: this.team2Name,
        icon: this.team2Image
      } as TeamModel,
      featuredImage: this.featureImage,
      title: this.sportName,
      scheduledDateTime: Timestamp.fromDate(this.scheduledDate),
      addedDateTime: Timestamp.now()
    } as MatchModel).then(_ => {
      console.log('new event added')
      this.team1Name = '';
      this.team2Name = '';
      this.sportName = '';
    });
  }


  async uploadImage(event) {
    return this.imageService.uploadImage(event.target.files[0]).then(imageUrl => {
      console.log(imageUrl)
      return imageUrl;
    }).catch(e => {
      console.log(e);
      return null;
    });
  }


  async uploadFeatureImage(event) {
    this.featureImage = await this.uploadImage(event);
  }
  async uploadTeam1Image(event) {
    this.team1Image = await this.uploadImage(event);
  }
  async uploadTeam2Image(event) {
    this.team2Image = await this.uploadImage(event);
  }

}
