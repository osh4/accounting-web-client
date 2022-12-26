import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SettingsListComponent} from './settings/settings-list/settings-list.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "settings-list", component: SettingsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
