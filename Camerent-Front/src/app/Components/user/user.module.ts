import { NgModule } from '@angular/core';
import { UserSideComponent } from './user-side/user-side.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AddressComponent } from './address/address.component';
import { ProofVeriComponent } from './proof-veri/proof-veri.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserSideComponent,
    AccountSettingsComponent,
    MyOrdersComponent,
    AddressComponent,
    ProofVeriComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    UserSideComponent,
  ]
})
export class UserModule { }
