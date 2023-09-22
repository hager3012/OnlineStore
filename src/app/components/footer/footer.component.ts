import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private _fb:FormBuilder) {}
  EmailForm:FormGroup=this._fb.group({
    email:['',[Validators.email, Validators.required]]
  })
}
