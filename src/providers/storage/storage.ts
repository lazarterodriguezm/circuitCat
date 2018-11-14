import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable()
export class StorageProvider {

  constructor(private angularFireDatabase: AngularFireDatabase, private angularFireStorage: AngularFireStorage) {
    console.log('Hello StorageProvider Provider');
  }

  storeInfoToDatabase(path, key, metainfo) {
    return this.angularFireDatabase.list(path).set(key, metainfo);
  }

  getListFromDatabase(path) {
    let ref = this.angularFireDatabase.list(path);
 
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  deleteInfoFromDatabase(path, metainfo) {
    this.angularFireDatabase.list(path).remove(metainfo.key)
  }
 
  uploadToStorage(path, information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;
 
    return this.angularFireStorage.ref(`${path}/${newName}`).putString(information);
  }
}
