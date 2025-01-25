import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private roleSubject = new BehaviorSubject<string | null>(null);
  private usernameSubject = new BehaviorSubject<string | null>(null);

  login(username: string, role: string): void {
    this.isAuthenticatedSubject.next(true);
    this.roleSubject.next(role);
    this.usernameSubject.next(username);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.roleSubject.next(null);
    this.usernameSubject.next(null);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getRole(): Observable<string | null> {
    return this.roleSubject.asObservable();
  }

  getUsername(): Observable<string | null> {
    return this.usernameSubject.asObservable();
  }
}

