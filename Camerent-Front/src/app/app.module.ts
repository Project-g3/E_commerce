import { NgModule } from '@angular/core';

// Angular modules
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
// **************************

import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';




@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    ModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
