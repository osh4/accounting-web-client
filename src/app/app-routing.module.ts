import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SettingsListComponent} from './settings/settings-list/settings-list.component';
import {SettingCreateComponent} from './settings/setting-create/setting-create.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "setting-create", component: SettingCreateComponent},
  {path: "settings-list", component: SettingsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
