import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { ModalService } from 'src/app/Services/modal/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // forcart
  public totalItem : number = 0;
  public searchTerm !: string;

  
  navItems = [
    { name:'Home',link:'' },
    { name:'Camera',link:'Products' },
    { name:'Accesories',link:'accesories' },
    { name:'About',link:'about' }
  ]
  constructor(private modal: ModalService, public _auth:AuthService) { }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    $event.preventDefault();

    this.modal.toggleModal('auth');
  }
// logout by clearing localStorage
  logoutUser($event:Event){
    $event.preventDefault();
    this._auth.logoutUser();
  }
}
