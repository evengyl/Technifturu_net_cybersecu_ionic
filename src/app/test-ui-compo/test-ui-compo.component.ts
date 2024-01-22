import { Component, OnInit } from '@angular/core'
import { ActionSheetButton, ActionSheetController, ModalController } from '@ionic/angular'

@Component({
  selector: 'app-test-ui-compo',
  templateUrl: './test-ui-compo.component.html',
  styleUrls: ['./test-ui-compo.component.scss'],
})
export class TestUiCompoComponent  implements OnInit {

  alertButtons = ['Action']

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl : ModalController
    
    ) {}

  ngOnInit() {}

  testEvent(event : any)
  {
    console.log(event)
  }
  
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
  ]


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: this.actionSheetButtons,
    })

    await actionSheet.present()
    await actionSheet.onDidDismiss().then(() => {
      console.log("fermé")
    })
  }

  //modal part
  
  message : string = ""
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel')
  }

  confirm() {
    this.modalCtrl.dismiss(this.message, 'confirm')
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<any>
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`
    }
  }



  //search bar in list prefab, with debounce
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }



  //Segmented content control
  contentSegment : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  switchContent(event : any){
    console.log(event.detail)
    if(event.detail.value == "c1")
      this.contentSegment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    else
      this.contentSegment = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  }

}
