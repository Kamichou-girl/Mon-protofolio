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
  showProjects = false;

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

  showProjectsList(): void {
    this.showProjects = true;
  }

  getProjectColor(index: number): string {
    const colors = ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'];
    return colors[index % colors.length];
  }
}
