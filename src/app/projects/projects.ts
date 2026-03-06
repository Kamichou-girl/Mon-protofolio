import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Project } from '../data.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects: Project[] = [];
  loading = true;
  error: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les projets.';
        this.loading = false;
      }
    });
  }
}
