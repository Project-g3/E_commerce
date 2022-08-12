import { HttpInterceptor} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,next:any){
    // inject Auth service file
    let authService =this.injector.get(AuthService)
    // cloning the request and setting the header
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getToken()}`
        }
      }
    )
    // passes this cloned to request
    return next.handle(tokenizedReq);
  }
}
