import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  address: FormControl;
  city: FormControl;
  state: FormControl;
  zip: FormControl;
  password: FormControl;
  conformpassword: FormControl;
  email: FormControl;
  phonenumber: FormControl;
  gender: FormControl;
  martialStatus: FormControl;
  language: FormControl;
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 

    this.firstName = new FormControl('', [
        Validators.minLength(3), 
        Validators.required,
        Validators.pattern("^[a-zA-Z]+")
        
      
    ]), 
    this.lastName = new FormControl('', [
        Validators.minLength(3), 
        Validators.maxLength(5), 
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]+")
    ]), 
    this.address = new FormControl('', [
        Validators.minLength(3), 
        Validators.maxLength(150), 
        Validators.required
        
    ]), 
    this.city = new FormControl('', Validators.required),
    this.state = new FormControl('', Validators.required),  
    this.zip = new FormControl('', [
        Validators.minLength(5), 
        Validators.maxLength(5), 
        Validators.required,
        Validators.pattern("^[0-9]+")
    ]), 
    this.password = new FormControl('', [
        Validators.minLength(4), 
        Validators.maxLength(20), 
        Validators.required,
        Validators.pattern("(?=.*\d)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}")
    ]), 
    this.conformpassword = new FormControl('', [
        Validators.required,
        Validators.minLength(4), 
        Validators.maxLength(20), 
        Validators.pattern("(?=.*\d)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}")
    ]), 
    this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
    ]), 
    this. phonenumber = new FormControl('', [
        Validators.minLength(10), 
        Validators.maxLength(15), 
        Validators.required,
        Validators.pattern("^[0-9]+")
    ]), 
    this.gender = new FormControl('', Validators.required),
    this.martialStatus = new FormControl('', Validators.required),
    this.language =new FormControl('', Validators.required);
}
createForm() { 
  this.myform = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      password: this.password,
      conformpassword: this.conformpassword,
      email: this.email,
      phonenumber: this.phonenumber,
      gender: this.gender,
      martialStatus: this.martialStatus,
      language: this.language
   
  });
}
onSubmit() {
    if (this.myform.touched) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      
    }
  }
}

