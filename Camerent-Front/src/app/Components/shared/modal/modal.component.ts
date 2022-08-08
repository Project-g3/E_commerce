import { Component, Input, OnInit , ElementRef } from '@angular/core';
import { ModalService } from 'src/app/Services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers:[ModalService]
})
export class ModalComponent implements OnInit {

  // get modalID from parent,ie, auth-model here
  @Input() modalID = '';


  constructor(public modal: ModalService, public el:ElementRef) {    
  }

  ngOnInit(): void {
    // append the native element,ie,app-modal, to body
    document.body.appendChild(this.el.nativeElement)
  }
  
  // used to toggle when close box clicked
  closeModal(){
    this.modal.toggleModal(this.modalID);
  }

}
