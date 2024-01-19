import { Component } from '@angular/core';
import { ActionSheetButton, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-listeLiens',
  templateUrl: 'listeLiens.component.html',
  styleUrls: ['listeLiens.scss']
})
export class ListeLiensComponent {

  constructor(private actionSheetCtrl: ActionSheetController) {}
  

  public actionSheetButtons : ActionSheetButton[] = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
      handler : () => {
        console.log("Click sur le bouton Delete")
      }
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
      handler : () => {
        console.log("Click sur le bouton Share")
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
      handler : () => {
        console.log("Click sur le bouton Cancel")
      }
    },
  ];


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: this.actionSheetButtons,
    });

    await actionSheet.present();
    await actionSheet.onDidDismiss().then(() => {
      console.log("fermé")
    })
  }


}
