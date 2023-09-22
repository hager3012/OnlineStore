import { Component } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  hiderepassword = true;
  isLoading=false
  massError=''
  constructor(private _fb:FormBuilder,private _Router:Router,private toastr: ToastrService,private _AuthService:AuthService) {}
registerForm:FormGroup=this._fb.group({
  name:['',[ Validators.required]],
  email:['',[Validators.email, Validators.required]],
  password:['',[Validators.required,Validators.minLength(6)]],
  rePassword:['',[Validators.required,Validators.minLength(6)]],
  phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{1,8}$/)]],
},{
  validator: this.ConfirmedValidator('password', 'rePassword')
})
ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
registerHandle(form:FormGroup){
  if(form.valid){
    this._AuthService.singUp(form.value).subscribe({
      next:data=>{
        if(data.message=='success'){
          this.toastr.success('Success', 'You can Login',{
            timeOut: 3000,
            progressBar:true
          });
          this._Router.navigate(['/login'])
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
