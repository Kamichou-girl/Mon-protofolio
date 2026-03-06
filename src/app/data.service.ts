import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  pointsCle?: string;
  githubUrl?: string;
  demoUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Données de projets basées sur le CV, chargées depuis assets
  private readonly projectsUrl = 'assets/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}

