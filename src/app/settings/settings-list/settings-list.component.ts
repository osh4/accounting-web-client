import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../settings.service";
import {Setting} from "../../types/Setting";

import {SettingType} from "../../types/SettingType";

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements OnInit {
  settingTypes: Array<SettingType> = [];
  newSetting: Setting;
  selectedSetting: Setting;

  constructor(public settingsService: SettingsService) {
    this.newSetting = new Setting();
    this.selectedSetting = new Setting();
  }

  ngOnInit() {
    this.settingTypes = this.settingsService.getSettingTypes();
  }

  createSetting() {
    console.log(this.newSetting);
    this.settingsService.createSetting(this.newSetting);
    this.newSetting = new Setting();
  }

  removeSetting(setting: Setting) {
    console.log(setting);
    this.settingsService.remove(setting);
  }

  editSetting(setting: Setting) {
    this.selectedSetting = setting;
  }

  updateSetting() {
    this.settingsService.update(this.selectedSetting);
    this.selectedSetting = new Setting();
  }

  cancelUpdate() {
    this.selectedSetting = new Setting();
  }
}
