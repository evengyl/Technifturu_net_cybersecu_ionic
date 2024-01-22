import { Component } from '@angular/core';
import { RessourceLinkService } from '../shared/services/ressource-link.service';

@Component({
  selector: 'app-listeLiens',
  templateUrl: 'listeLiens.component.html',
  styleUrls: ['listeLiens.scss']
})
export class ListeLiensComponent {

  allRessource : any[] = []
  
  constructor(private ressourceServe : RessourceLinkService) {
    this.ressourceServe.init().then(() => {
      this.ressourceServe.get("ressources").then((ressources : any[]) => {
        this.allRessource = ressources.reverse()
      })
    })
  }


  handleRefresh(event : any){
    setTimeout(() => {
      this.ressourceServe.get("ressources").then((ressources : any[]) => {
        this.allRessource = ressources.reverse()
        event.target.complete();
      })
    }, 1500)
  }
  

}
