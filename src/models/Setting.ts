import {SettingType} from "./SettingType";

export class Setting {
  key: string = '';
  settingType: SettingType = new SettingType();
  value: string = '';
}
