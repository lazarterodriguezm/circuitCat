import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable()
export class StorageProvider {

  constructor(private angularFireDatabase: AngularFireDatabase, private angularFireStorage: AngularFireStorage) {
    console.log('Hello StorageProvider Provider');
  }

  getList(path) {
    let ref = this.angularFireDatabase.list(path);
 
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
 
  uploadToStorage(path, information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;
 
    return this.angularFireStorage.ref(`${path}/${newName}`).putString(information);
  }
 
  storeInfoToDatabase(path, metainfo) {
    return this.angularFireDatabase.list(path).push(metainfo);
  }
 
  deleteFile(path, file) {
    let key = file.key;
    let storagePath = file.fullPath;
 
    let ref = this.angularFireDatabase.list(path);
 
    ref.remove(key);
    return this.angularFireStorage.ref(storagePath).delete();
  }
}
