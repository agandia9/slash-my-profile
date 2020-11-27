import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.sass']
})
export class ProfileCardComponent implements OnInit {
  
  profileForm: FormGroup;
  constructor(
    
    private formBuilder: FormBuilder,
    ) {
      
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        gender: [''],
        description: [''],
      });
    }
    ngOnInit(): void {
    }
    
    get formControl() {
      return this.profileForm.controls;
    }
    
    public submit() {
      console.log(this.profileForm.value)
    }

}
  
  