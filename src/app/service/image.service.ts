import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';
  constructor(private storage: Storage) {}

  public uploadImage($event: any, imgName: string, folder: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imagen/' + folder + imgName);
    uploadBytes(imgRef, file)
      .then((resp) => {
        this.getImages(folder);
      })
      .catch((err) => console.log(err));
    return file;
  }

  getImages(folder: string) {
    const imagesRef = ref(this.storage, 'imagen' + folder);
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log('la url es: ' + this.url);
        }
      })
      .catch((err) => console.log(err));
  }
}
