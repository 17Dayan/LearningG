import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importar AngularFireModule y AngularFireAuthModule
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    
    // Configuración de AngularFireModule con la información de Firebase en environment.ts
    AngularFireModule.initializeApp(environment.firebase),
    
    // Agregar el módulo AngularFireAuthModule para habilitar la autenticación
    AngularFireAuthModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {} 