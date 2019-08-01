import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/Models/user.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss'],
  providers:[UserService]
})
export class RegistrateComponent implements OnInit {
  public user: User;
  public identity;
  public token;
  public status;
  constructor(private _router: Router,
    private _userService: UserService,) {
      
  this.user = new User ("","","","","");

     }
  

  ngOnInit() {}

  registrar(){
    this._userService.registro(this.user).subscribe(
      response=>{
        if(response){
          this.status = 'ok'
          console.log(response)
        }
      },
      error=>{
        console.log(<any>error);
        this.status = 'error'
      }
    )
  }

  

}
