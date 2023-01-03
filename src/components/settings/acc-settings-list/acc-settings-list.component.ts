import {Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {SettingsService} from "../../../services/settings.service";
import {Setting} from "../../../models/Setting";
import {BehaviorSubject} from "rxjs";

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
  settingList: BehaviorSubject<Setting[]> = new BehaviorSubject(new Array<Setting>());
  page = 0;
  size = 2;
  totalPages = 0;
  totalElements = 6;

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
      debugger
      this.settingsService.getSettings(this.page - 1, this.size, column + '_' + direction)
        .subscribe(data => {
          this.settingList.next(data.content);
        });
    }
  }

  ngOnInit() {
    this.settingsService.getSettings().subscribe(data => {
      this.settingList.next(data.content);
      this.totalElements = data.totalElements;
      this.page = data.number;
      this.totalPages = data.totalPages;
    });
  }

  createSetting() {
    this.settingsService.createSetting(this.newSetting).subscribe(
      () => this.refreshSettings()
    );
    this.newSetting = new Setting();
  }

  removeSetting(setting: Setting) {
    this.settingsService.remove(setting).subscribe(
      () => this.refreshSettings()
    );
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

  public refreshSettings() {
    this.settingsService.getSettings(this.page - 1, this.size)
      .subscribe(data => {
        this.settingList.next(data.content);
      });
  }
}
