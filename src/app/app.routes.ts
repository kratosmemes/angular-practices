import { Routes } from "@angular/router";
import { FormsComponent } from "./Screens/forms-component/forms-component";
import { MaterialComponent } from "./Screens/material-component/material-component";
import { UsersListComponent } from "./Screens/user-list/user-list";
import { NotFoundComponent } from "./Screens/not-found-component/not-found-component"; 
import { UsersHomeComponent } from "./Screens/users-home-component/users-home-component";
import { ReactiveFormsComponent } from "./Screens/reactive-forms-component/reactive-forms-component";
import { EmptyScreenComponent } from "./Screens/empty-screen/empty-screen";

export const routes: Routes = [
  { path: '', component: EmptyScreenComponent },
  { path: 'forms',    component: FormsComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { 
    path: 'users',    component: UsersHomeComponent,
    children: [
      { path: 'list', component: UsersListComponent}
    ] 
  },
  { path: '**',       component: NotFoundComponent},
];