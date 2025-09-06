import { Routes } from "@angular/router";
import { FormsComponent } from "./Screens/forms-component/forms-component";
import { MaterialComponent } from "./Screens/material-component/material-component";
import { UsersListComponent } from "./Screens/user-list/user-list";
import { NotFoundComponent } from "./Screens/not-found-component/not-found-component"; 
import { UsersHomeComponent } from "./Screens/users-home-component/users-home-component";
import { ReactiveFormsComponent } from "./Screens/reactive-forms-component/reactive-forms-component";
import { EmptyScreenComponent } from "./Screens/empty-screen/empty-screen";
import { authGuard } from "./auth-guard";
import { LoginComponent } from "./Screens/login-component/login-component";
import { TodoComponent } from "./Screens/todo-component/todo-component";
import { TablasComponent } from "./Screens/tablas-component/tablas-component";

export const routes: Routes = [
  { 
    path: '', component: EmptyScreenComponent,
  },
  { path: 'login', component: LoginComponent },
  { 
    path: 'forms',
    component: FormsComponent,
    canActivate: [authGuard],
    data: { roles: ['admin'] }
  },
  { 
    path: 'material',
    component: MaterialComponent,
    canActivate: [authGuard],
    data: { roles: ['admin'] }
  },
  { 
    path: 'reactiveForms',
    component: ReactiveFormsComponent,
    canActivate: [authGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [authGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'todo/tablas',
    component: TablasComponent,
    canActivate: [authGuard],
    data: { roles: ['admin'] },
  },
  { 
    path: 'users',
    component: UsersHomeComponent,
    canActivate: [authGuard],
    data: { roles: ['admin'] },
    children: [
      { path: 'list', component: UsersListComponent}
    ] 
  },
  { path: '**', component: NotFoundComponent},
];