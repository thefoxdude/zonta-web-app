import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendEmail(name, email, message) {
   //  const uri = 'http://localhost:3000/contact/send';
   //  const obj = {
   //    name: name,
   //    email: email,
   //    message: message,
   //  };
   //  return this.http.post(uri, obj);
  }
}