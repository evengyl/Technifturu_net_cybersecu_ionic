import { Component } from '@angular/core';
import { RessourceLinkService } from '../shared/services/ressource-link.service';

@Component({
  selector: 'app-add-ressource',
  templateUrl: 'add-ressource.component.html',
  styleUrls: ['add-ressource.component.scss']
})
export class AddRessourceComponent {

  title! : string
  url! : string 
  date! : Date 
  allRessource : any[] = []

  //toaster
  isAddResOk : boolean = false
  duration : number = 2500

  constructor(private ressourceServe : RessourceLinkService) {
    this.ressourceServe.init().then(() => {
      this.ressourceServe.get("ressources").then((ressources : any[]) => {
        if(ressources)
          this.allRessource = ressources
      })
    })
  }


  addRessource()
  {
    this.allRessource.push({ title : this.title, url : this.url, date : this.date })
    this.ressourceServe.set("ressources", this.allRessource)
    this.title = ""
    this.url = ""
    this.setOpen()
  }

  buttonResetStorage_DEV(){
    this.ressourceServe.reset()
  }

  viewDateConsole(event : any){
    console.log(event.detail.value)
    this.date = new Date(event.detail.value)
  }

  setOpen(){
    this.isAddResOk = !this.isAddResOk
  }

}
