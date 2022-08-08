import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modal/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit,OnDestroy {

  constructor(private modal: ModalService) { }

  ngOnInit(): void{
    // lifecycle hooks used for init the register at init of component
    this.modal.register('auth');
  }
  // memory leak
  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }

}
