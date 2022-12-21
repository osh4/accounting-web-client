import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../settings.service";

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements OnInit {
  contacts: { id: any; name: any; description: any; email: any; }[] = [];
  selectedContact: any;

  constructor(public settingsService: SettingsService) {
  }

  ngOnInit() {
    this.contacts = this.settingsService.getContacts();
  }

  public selectContact(contact: any) {
    this.selectedContact = contact;
  }
}
