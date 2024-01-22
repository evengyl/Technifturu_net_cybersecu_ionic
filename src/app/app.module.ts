import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLiensComponent } from './listeLiens/listeLiens.component';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import { TestCameraComponent } from './test-camera-capacitor/test-camera.component';
import { TabsPage } from './tabs/tabs.page';
import { TestUiCompoComponent } from './test-ui-compo/test-ui-compo.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListeLiensComponent,
    TestCameraComponent,
    AddRessourceComponent,
    TabsPage,
    TestUiCompoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
