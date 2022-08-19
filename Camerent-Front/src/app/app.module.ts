import { NgModule } from '@angular/core';

// Angular modules
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

// **************************

// Firebase modules
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { AuthService } from './Services/Auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './Services/token/token-interceptor.service';
import { SortbyPipe } from './Pipes/sortby.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SortbyPipe,
  ],
  imports: [
    ModulesModule,
    FormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideStorage(()=>getStorage())
  ],
  //services
  providers: [AuthService, {
    // 
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
