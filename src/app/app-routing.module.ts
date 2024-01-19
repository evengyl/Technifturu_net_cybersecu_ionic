import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { Tab2Page } from './tab2/tab2.page';
import { ListeLiensComponent } from './listeLiens/listeLiens.component';
import { TestCameraComponent } from './tab3/test-camera.component';

const routes: Routes = [
  {
    path: 'tabs', component: TabsPage, children : [
      { path: 'listeLien', component: ListeLiensComponent },
      { path: 'tab2', component: Tab2Page },
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
