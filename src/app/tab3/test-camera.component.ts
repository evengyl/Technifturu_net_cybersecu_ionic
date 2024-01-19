import { Component } from '@angular/core';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';


@Component({
  selector: 'app-test-camera',
  templateUrl: 'test-camera.component.html',
  styleUrls: ['test-camera.scss']
})
export class TestCameraComponent {

  constructor() {}

  image! : Photo

  async getPicutre(){
    this.image = await Camera.getPhoto({
      quality : 90,
      allowEditing : true,
      resultType : CameraResultType.Uri
    })
  }

  async permissionPicutre(){
    let permissions = await Camera.checkPermissions()

    if(permissions.camera != "granted" || permissions.photos != "granted")
    {
      let demand = await Camera.requestPermissions({
        permissions : ["camera", "photos"]
      })

      console.log(demand)
    }
    console.log(permissions)
  }

}
