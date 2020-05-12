import { Component, OnInit } from '@angular/core';
import { Messenger } from '../messenger';
import { EnrollmentService } from '../enrollment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //the menssenger that wants to contact
  private messenger: Messenger = new Messenger();

  constructor(private enrollment: EnrollmentService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.messenger);
    this.enrollment.messengerSend(this.messenger).subscribe(
      data => console.log("Your message has been sent!", data),
      err => console.log("Oh no an error :(", err));
  }

}
