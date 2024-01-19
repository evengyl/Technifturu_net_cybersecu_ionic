import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLiensComponent } from './listeLiens/listeLiens.component';
import { Tab2Page } from './tab2/tab2.page';
import { TestCameraComponent } from './tab3/test-camera.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { TabsPage } from './tabs/tabs.page';

@NgModule({
  declarations: [
    AppComponent,
    ListeLiensComponent,
    TestCameraComponent,
    Tab2Page,
    ExploreContainerComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
