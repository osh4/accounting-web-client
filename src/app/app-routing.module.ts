import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccSettingsListComponent} from '../components/settings/acc-settings-list/acc-settings-list.component';
import {DashboardComponent} from '../components/acc-dashboard/dashboard.component';
import {AccIncomeComponent} from "../components/acc-income/acc-income.component";
import {AccAccountsListComponent} from "../components/acc-accounts-list/acc-accounts-list.component";
import {AccTransactionsListComponent} from "../components/acc-transactions-list/acc-transactions-list.component";
import {AccTransactionTypesListComponent} from "../components/acc-transaction-types-list/acc-transaction-types-list.component";

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
