import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../settings.service";

@Component({
  selector: 'app-setting-create',
  templateUrl: './setting-create.component.html',
  styleUrls: ['./setting-create.component.css']
})
export class SettingCreateComponent implements OnInit {
  contact: { id: any, name: any, description: any, email: any } = {id: null, name: "", description: "", email: ""};

  constructor(public settingsService: SettingsService) {
  }

  ngOnInit() {
  }

  createContact() {
    console.log(this.contact);
    this.settingsService.createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};

  }
}
