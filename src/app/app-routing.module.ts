import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccSettingsListComponent} from './settings/settings-list/acc-settings-list.component';
import {HomeComponent} from './home/home.component';
import {AccIncomeComponent} from "./acc-income/acc-income.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "settings-list", component: AccSettingsListComponent},
  {path: "income", component: AccIncomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
