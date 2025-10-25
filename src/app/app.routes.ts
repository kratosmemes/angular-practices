import { Routes } from "@angular/router";
import { FormsComponent } from "./Screens/forms-component/forms-component";
import { MaterialComponent } from "./Screens/material-component/material-component";
import { UsersListComponent } from "./Screens/user-list/user-list";
import { NotFoundComponent } from "./Screens/not-found-component/not-found-component"; 
import { UsersHomeComponent } from "./Screens/users-home-component/users-home-component";
import { ReactiveFormsComponent } from "./Screens/reactive-forms-component/reactive-forms-component";
import { EmptyScreenComponent } from "./Screens/empty-screen/empty-screen";
import { AuthGuard } from "./auth-guard";
import { LoginComponent } from "./Screens/login-component/login-component";
import { TodoComponent } from "./Screens/todo-component/todo-component";
import { TablasComponent } from "./Screens/tablas-component/tablas-component";
import { ManipularDomComponent } from "./Screens/manipular-dom/manipular-dom";
import { UnauthorizedComponent } from "./Screens/unauthorized-component/unauthorized.component";

export const routes: Routes = [
  { 
    path: '', component: EmptyScreenComponent,
  },
  { path: 'login', component: LoginComponent },
  { 
    path: 'forms',
    component: FormsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['forms_entitlement'] }
  },
  { 
    path: 'material',
    component: MaterialComponent,
    canActivate: [AuthGuard],
    data: { roles: ['material_entitlement'] }
  },
  { 
    path: 'reactiveForms',
    component: ReactiveFormsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['reactive_forms_entitlement'] }
  },
  {
    path: 'todo',
    data: { roles: ['admin'] },
    children: [
      {
        path: '',
        component: TodoComponent,
        canActivate: [AuthGuard],
        data: { roles: ['todo_entitlement'] }
      },
      {
        path: 'tablas',
        component: TablasComponent,
        canActivate: [AuthGuard],
        data: { roles: ['todo_tablas_entitlement'] }
      },
      {
        path: 'manipular-dom',
        component: ManipularDomComponent,
        canActivate: [AuthGuard],
        data: { roles: ['todo_manipular_dom_entitlement'] }
      }
    ]
  },
  {
    path: 'users',
    component: UsersHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
    children: [
      { path: 'list', component: UsersListComponent}
    ] 
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  { path: '**', component: NotFoundComponent},
];