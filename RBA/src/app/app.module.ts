import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './Login/Forget-password/forget-password/forget-password.component';
import { ForgetUseridComponent } from './Login/Forget-userid/forget-userid/forget-userid.component';
import { LoginComponent } from './Login/login/login/login.component';
import { ResetPasswordComponent } from './Login/reset-password/reset-password/reset-password.component';
import { AccountClosureComponent } from './User/Account/account-closure/account-closure/account-closure.component';
import { AccountDetailsComponent } from './User/Account/account-details/account-details/account-details.component';
import { ViewAccountBalanceComponent } from './User/Account/view-account-balance/view-account-balance/view-account-balance.component';
import { HeaderComponent } from './User/Header/header/header.component';
import { ChangePasswordComponent } from './User/Profile/change-password/change-password/change-password.component';
import { ManageNotificationComponent } from './User/Profile/manage-notification/manage-notification/manage-notification.component';
import { SetupBudgetComponent } from './User/Profile/setup-budget/setup-budget/setup-budget.component';
import { SetupProfileComponent } from './User/Profile/setup-profile/setup-profile/setup-profile.component';
import { SideNavComponent } from './User/Side-nav/side-nav/side-nav.component';
import { TransactionSummaryComponent } from './User/Transaction-Summary/transaction-summary/transaction-summary.component';
import { TransferComponent } from './User/Transfer/transfer/transfer.component';
import { ExternalTransferComponent } from './User/Transfer/external-transfer/external-transfer/external-transfer.component';
import { TranferWithinMyaccountComponent } from './User/Transfer/transfer-within-myaccount/tranfer-within-myaccount/tranfer-within-myaccount.component';
import { TransferWithinMybankComponent } from './User/Transfer/transfer-within-mybank/transfer-within-mybank/transfer-within-mybank.component';
import { AddBeneficiaryComponent } from './User/Transfer/add-beneficiary/add-beneficiary/add-beneficiary.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    ForgetUseridComponent,
    LoginComponent,
    ResetPasswordComponent,
    AccountClosureComponent,
    AccountDetailsComponent,
    ViewAccountBalanceComponent,
    HeaderComponent,
    ChangePasswordComponent,
    ManageNotificationComponent,
    SetupBudgetComponent,
    SetupProfileComponent,
    SideNavComponent,
    TransactionSummaryComponent,
    TransferComponent,
    ExternalTransferComponent,
    TranferWithinMyaccountComponent,
    TransferWithinMybankComponent,
    AddBeneficiaryComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
