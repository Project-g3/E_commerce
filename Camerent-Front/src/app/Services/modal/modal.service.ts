import { Injectable } from '@angular/core';

// interface is used to define what is added ,TS
interface IModal {
  id: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // modals for saving the IDs of modals with interface
  private modals: IModal[] = [];

  constructor( ) { }
  ngOnInit(): void {
  }
  
   

  // register IDs from the components
  register(id: string){
    this.modals.push({
      id,
      visible: false //default false
    })
  }

  unregister(id: string){
    this.modals = this.modals.filter(
      element=> element.id !== id
    )
  }



  // to display modal if return is true, toggle hidden feature in html
  isModalOpen(id: string):boolean{
    return !!this.modals.find(element=>element.id===id)?.visible;
  }

  toggleModal(id: string){
    const modal = this.modals.find(element=>element.id===id);
    if(modal){
      modal.visible = !modal.visible;
    }
  }
}
