import { NgModule } from '@angular/core';
import { UserSideComponent } from './user-side/user-side.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AddressComponent } from './address/address.component';
import { ProofVeriComponent } from './proof-veri/proof-veri.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    UserSideComponent,
    AccountSettingsComponent,
    MyOrdersComponent,
    AddressComponent,
    ProofVeriComponent,
    PaymentComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    UserSideComponent,
  ]
})
export class UserModule { }
