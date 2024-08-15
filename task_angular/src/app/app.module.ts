import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/components/login/login.component";
import { SignupComponent } from "./auth/components/signup/signup.component";
import { DemoAngularMaterialModule } from "./DemoAngularMaterialModule";
import { RouterModule, Routes } from "@angular/router"; // Import RouterModule and Routes
import { MatToolbarModule } from "@angular/material/toolbar"; // Import MatToolbarModule

// Define appRoutes
const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "admin", loadChildren:() => import("./modules/admin/admin.module").then(e=>e.AdminModule) },
  { path: "employee", loadChildren:() => import("./modules/employee/employee.module").then(e=>e.EmployeeModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes), // Use RouterModule.forRoot with appRoutes
    RouterModule,
    MatToolbarModule,
    DemoAngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
