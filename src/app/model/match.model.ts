import {TeamModel} from './team.model';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface MatchModel {
  id: string;
  team1: TeamModel;
  team2: TeamModel;
  scheduledDateTime: Timestamp;
  addedDateTime: Timestamp;
}
