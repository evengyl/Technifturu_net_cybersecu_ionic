import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import { ListeLiensComponent } from './listeLiens/listeLiens.component';
import { TestCameraComponent } from './test-camera-capacitor/test-camera.component';
import { TestUiCompoComponent } from './test-ui-compo/test-ui-compo.component';

const routes: Routes = [
  {
    path: 'tabs', component: TabsPage, children : [
      { path: 'listeLien', component: ListeLiensComponent },
      { path: 'addressource', component: AddRessourceComponent },
      { path: 'testuicompo', component: TestUiCompoComponent },
      { path: 'camera', component: TestCameraComponent },
    ]
  },
  {
    path : "", redirectTo : "/tabs/listeLien", pathMatch : "full"
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
