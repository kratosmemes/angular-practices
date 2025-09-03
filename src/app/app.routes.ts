import { Routes } from "@angular/router";
import { FormsComponent } from "./Screens/forms-component/forms-component";
import { MaterialComponent } from "./Screens/material-component/material-component";
import { UsersListComponent } from "./Components/user-list/user-list";

export const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'users', component: UsersListComponent }
];