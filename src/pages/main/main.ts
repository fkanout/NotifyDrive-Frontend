import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController, NavParams,ToastController, Platform } from 'ionic-angular';
import { TypePage } from '../type/type';
import { MorePage } from '../more/more';
import { User } from '../../providers/user';
import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
declare var cordova: any;

/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  private typePage;
  private morePage;
  private carsList: Observable<any>;
  lastImage: string = null;

  
  constructor(
    public toastCtrl: ToastController,
    public platform: Platform,
    private file: File,
    private filePath: FilePath,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: User,
    private camera: Camera,
    private transfer: Transfer) {
     this.typePage = TypePage;
     this.morePage = MorePage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.carsList = this.userProvider.getMyCars();

  }
  openCamera(){
    console.log('open camera');

    let options = {
            quality : 10,
            destinationType : this.camera.DestinationType.DATA_URL,
            sourceType : this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false
        };
    this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
      if (this.platform.is('android')) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
  });

  
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // this.userProvider.getCarPlateViaCRM(imageData);
     
  }
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  console.log(namePath, currentName, newFileName) ;
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}
 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}

}
