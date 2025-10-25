import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private userRoles : any;
  private userData: any = null;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getEntitlements(): Observable<string[]> {
    console.log("Fetching user roles from backend...");
    return this.httpClient.get<string[]>('http://localhost:8080/getRoles').pipe(
        tap((roles: any) => {
          this.userRoles = roles.userEntitlements;
        })
    );
  }

  getRoles() {
    return this.userRoles;
  }

  hasRole(role: string){
    return this.userRoles.includes(role);
  }
}
