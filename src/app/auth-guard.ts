import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { LoginService } from './Screens/login-component/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log("Guard activated for route:", route.routeConfig?.path);

    return this.validateToken().pipe(
      switchMap(isTokenValid => {
        if (!isTokenValid) {
          this.redirectToLogin(route);
          return of(false);
        }
        return this.validateRoles(route);
      }),
      catchError(() => {
        this.redirectToLogin(route);
        return of(false);
      })
    );
  }

  private validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return of(false);
    }

    try {
      const tokenParts = token.split('-');
      const tokenTimestamp = parseInt(tokenParts[tokenParts.length - 1]);
      const currentTime = Date.now();
      const fifteenMinutes = 15 * 60 * 1000;

      const isTokenValid = (currentTime - tokenTimestamp) <= fifteenMinutes;
      
      if (!isTokenValid) {
        console.log("Token expirado");
        localStorage.removeItem('token');
      } else {
        console.log("Token válido");
      }

      return of(isTokenValid);
    } catch (error) {
      console.error("Error validando token:", error);
      return of(false);
    }
  }

  private validateRoles(route: ActivatedRouteSnapshot): Observable<boolean> {
    const requiredRoles = route.data['roles'] as Array<string>;
    
    // Si la ruta no requiere roles específicos, permitir acceso
    if (!requiredRoles || requiredRoles.length === 0) {
      return of(true);
    }

    return this.loginService.getEntitlements().pipe(
      map(() => {
        const userRoles = this.loginService.getRoles();
        
        if (!userRoles || userRoles.length === 0) {
          this.router.navigate(['/unauthorized']);
          return false;
        }

        const hasRequiredRole = requiredRoles.some(role => 
          userRoles.includes(role)
        );

        const isAdminRole = userRoles.includes('tm_admin');

        if (!hasRequiredRole && !isAdminRole) {
          console.log(`Acceso denegado. Se requieren: ${requiredRoles}, usuario tiene: ${userRoles}`);
          this.router.navigate(['/unauthorized']);
          return false;
        }

        if(isAdminRole) {
          console.log("Acceso permitido para admin");
          return true;
        }

        console.log("Acceso permitido");
        return true;
      }),
      catchError(error => {
        console.error("Error obteniendo permisos:", error);
        this.router.navigate(['/unauthorized']);
        return of(false);
      })
    );
  }

  private redirectToLogin(route: ActivatedRouteSnapshot): void {
    // Guardar ruta denegada para redirigir después del login
    const currentPath = this.getCurrentPath(route);
    if (currentPath && currentPath !== 'N/A') {
      localStorage.setItem('deniedRoute', currentPath);
    }
    
    this.router.navigate(['/login']);
  }

  private getCurrentPath(route: ActivatedRouteSnapshot): string {
    if (!route.routeConfig?.path) return 'N/A';
    
    // Construir la ruta completa considerando rutas anidadas
    let fullPath = route.routeConfig.path;
    let currentRoute = route;
    
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      if (currentRoute.routeConfig?.path) {
        fullPath += `/${currentRoute.routeConfig.path}`;
      }
    }
    
    return fullPath;
  }
}