import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Remplace l'URL ci-dessous par l'URL de ton backend Render
  // Exemple : https://ton-backend.onrender.com/api
  private readonly baseUrl = 'https://votre-backend.onrender.com/api';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
  }
}

