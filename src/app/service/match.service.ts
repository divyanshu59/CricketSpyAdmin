import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MatchModel} from '../model/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  events$: Observable<MatchModel>;

  constructor(private db: AngularFirestore) { }

  addEvent(match: MatchModel): Promise<void>{
    const docRef = this.db.collection('events').doc().ref;
    match.id = docRef.id;
    return docRef.set(match);
  }
}
