import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: AngularFireStorage, ) {
  }

  async uploadImage(file: File): Promise<string> {
    const path = `images/${Date.now()}_${file.name}`;
    const task = await this.storage.upload(path, file);
    return await task.ref.getDownloadURL();
  }

}
