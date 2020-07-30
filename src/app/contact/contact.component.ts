import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../data.service";
import {Data} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  dataServicePost: DataService;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.messageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    })

    this.dataServicePost = dataService;
  }

  onSubmit() {
    this.submitted = true;

    this.dataServicePost.createUser();

    if (this.messageForm.invalid) {
      return;

    }
    this.success = true;
  }

  ngOnInit(): void {
  }

}
