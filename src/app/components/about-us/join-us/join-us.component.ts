import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html'
})
export class JoinUsComponent {
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
         message: ['', Validators.required]
      });
   }

   sendMail(name: string, email: string, message: string) {
      let url = `https://bel0tywt2a.execute-api.us-west-2.amazonaws.com/dev/email/send`
      let params: URLSearchParams = new URLSearchParams();
      let headers = new HttpHeaders({'Content-Type': 'application/json'});

      const data = {
         email: email,
         name: name,
         content: message
      }

      this.http.post(url, data, { headers: headers })
         .subscribe( result => {
            console.log(result);
         });
   }

}