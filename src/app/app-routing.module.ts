import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccSettingsListComponent} from './settings/acc-settings-list/acc-settings-list.component';
import {DashboardComponent} from './acc-dashboard/dashboard.component';
import {AccIncomeComponent} from "./acc-income/acc-income.component";
import {AccAccountsListComponent} from "./acc-accounts-list/acc-accounts-list.component";
import {AccTransactionsListComponent} from "./acc-transactions-list/acc-transactions-list.component";
import {AccTransactionTypesListComponent} from "./acc-transaction-types-list/acc-transaction-types-list.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "dashboard"},
  {path: "dashboard", component: DashboardComponent},
  {path: "settings-list", component: AccSettingsListComponent},
  {path: "income", component: AccIncomeComponent},
  {path: "accounts", component: AccAccountsListComponent},
  {path: "transactions", component: AccTransactionsListComponent},
  {path: "transaction-types", component: AccTransactionTypesListComponent},
  {path: "account-types", component: AccAccountsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
