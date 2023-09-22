import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  hiderepassword = true;
  isLoading=false
  massError=''
  constructor(private _fb:FormBuilder,private _Router:Router,private toastr: ToastrService,private _AuthService:AuthService) {}
LoginForm:FormGroup=this._fb.group({
  email:['',[Validators.email, Validators.required]],
  password:['',[Validators.required,Validators.minLength(6)]],
})
LoginHandle(form:FormGroup){
  if(form.valid){
    this._AuthService.login(form.value).subscribe({
      next:data=>{
        console.log(data);

        if(data.message=='success'){
          this.toastr.success('Success', 'Welcome',{
            timeOut: 3000,
            progressBar:true
          });
          
          localStorage.setItem('userToken',data.token)
          this._AuthService.decodeUserData();
          this._Router.navigate(['/home'])
        }

      },
      error:err=>{

        this.massError=err.error.message
        this.toastr.error('Error','',{
          progressBar:true
        });
      }
    })

  }
}
  }
