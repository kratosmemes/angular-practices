import { Routes } from "@angular/router";
import { FormsComponent } from "./Screens/forms-component/forms-component";
import { MaterialComponent } from "./Screens/material-component/material-component";

export const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'material', component: MaterialComponent },
];