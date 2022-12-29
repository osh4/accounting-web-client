import {Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {SettingsService} from "../../../services/settings.service";
import {Setting} from "../../../types/Setting";

@Directive({
  selector: 'th[sortable]',
  standalone: true,
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class AccSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

export type SortColumn = keyof Setting | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {asc: 'desc', desc: '', '': 'asc'};

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Component({
  selector: 'app-settings-list',
  templateUrl: './acc-settings-list.component.html',
  styleUrls: ['./acc-settings-list.component.css']
})
export class AccSettingsListComponent implements OnInit {
  newSetting: Setting;
  selectedSetting: Setting;

  constructor(public settingsService: SettingsService) {
    this.newSetting = new Setting();
    this.selectedSetting = new Setting();
  }

  @ViewChildren(AccSortableHeader) headers: QueryList<AccSortableHeader> = new QueryList<AccSortableHeader>();

  onSort({column, direction}: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction !== '' && column !== '') {
      let settings = this.settingsService.getSettings().sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
      this.settingsService.setSettings(settings);
    }
  }

  ngOnInit() {
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
