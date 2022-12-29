import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AccSortableHeader, AccSettingsListComponent} from './settings/acc-settings-list/acc-settings-list.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './acc-dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {AccIncomeComponent} from './acc-income/acc-income.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccAccountsListComponent } from './acc-accounts-list/acc-accounts-list.component';
import { AccTransactionTypesListComponent } from './acc-transaction-types-list/acc-transaction-types-list.component';
import { AccTransactionsListComponent } from './acc-transactions-list/acc-transactions-list.component';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';
import {ChartjsModule} from "@coreui/angular-chartjs";

@NgModule({
  declarations: [
    AppComponent,
    AccSettingsListComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AccIncomeComponent,
    AccAccountsListComponent,
    AccTransactionTypesListComponent,
    AccTransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccSortableHeader,
    NgbModule,
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule,
    ChartjsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
