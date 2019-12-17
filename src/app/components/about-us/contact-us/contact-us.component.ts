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
         phone: [''],
         subject: [''],
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

   sendMail(name: string, email: string, phone: string, subject: string, message: string) {

      let url = `https://bel0tywt2a.execute-api.us-west-2.amazonaws.com/dev/email/send`
      let params: URLSearchParams = new URLSearchParams();
      let headers = new HttpHeaders({'Content-Type': 'application/json'});

      // params.set('to', 'danielfox400@gmail.com');
      // params.set('from', email);
      // params.set('subject', 'zonta from: ' + name);
      // params.set('content', message);

      const data = {
         email: email,
         name: name,
         phone: phone,
         subject: subject,
         content: message
      }

      this.http.post(url, data, { headers: headers })
         .subscribe( result => {
            console.log(result);
         });

   }

}