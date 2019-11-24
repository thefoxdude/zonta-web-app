import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent {
   angForm: FormGroup;
   constructor (
   private fb: FormBuilder,
   private contactService: ContactService,
   private http: HttpClient
   ) {
      this.createForm();
   }

   createForm() {
      this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      });
   }
   // sendMail(name, email, message) {
   //    this.contactService.sendEmail(name, email, message).subscribe(success => {
   //    console.log(success);
   //    }, error => {
   //    console.log(error);
   //    });
   // }

   sendMail(name: string, email: string, message: string) {

      let url = `https://us-central1-zonta-web-app.cloudfunctions.net/httpEmail`
      let params: URLSearchParams = new URLSearchParams();
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' , 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'});

      params.set('to', 'danielfox400@gmail.com');
      params.set('from', email);
      params.set('subject', 'zonta from: ' + name);
      params.set('content', message);

      return this.http.post(url, params, { headers: headers })
                     .subscribe( result => {
                        console.log(result);
                     });

   }

}