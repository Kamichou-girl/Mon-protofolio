import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../data.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Association – ONG Crechendo Vie',
      description:
        'Plateforme de gestion administrative et médicale pour l’ONG Crechendo Vie : suivi des employés, activités, paiements et dossiers médicaux des bénéficiaires.',
      technologies: ['API REST', 'SQL Server', 'C#', 'Gestion de données sensibles']
    },
    {
      id: 2,
      title: 'Plateforme de cantine scolaire',
      description:
        'Application mobile dédiée à la gestion des commandes et à l’organisation interne d’une cantine scolaire pour faciliter le flux des repas.',
      technologies: ['React Native', 'JavaScript', 'API REST'],
      pointsCle: 'Interface mobile intuitive et gestion en quasi temps réel des commandes.'
    },
    {
      id: 3,
      title: 'Portfolio dynamique Angular',
      description:
        'Site web professionnel présentant mes compétences et réalisations, conçu de façon modulaire. Ce portfolio sert de projet final pour le module Angular.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'JSON (simulation d’API)'],
      githubUrl: 'https://github.com/Kamichou-girl/Mon-protofolio',
      demoUrl: 'https://nissi-portfolio.netlify.app'
    },
    {
      id: 4,
      title: 'Custom Admin & CMS Django (Méthode Agile)',
      description:
        'Refonte complète de l’interface d’administration Django pour la rendre intuitive et dynamique. Gestion d’articles, de galeries photo et de contenus multimédias, pensée pour un utilisateur non technique.',
      technologies: ['Django', 'Admin personnalisé', 'Méthode Agile', 'UI/UX'],
      pointsCle:
        'Réalisation en sprints : analyse des besoins, maquettage, développement itératif, tests et retours utilisateurs.'
    },
    {
      id: 5,
      title: 'Animation digitale – AI University Mumbai',
      description:
        'Amélioration de la visibilité internationale d’AI University à Mumbai via la création de contenus numériques et la gestion des réseaux sociaux.',
      technologies: ['Photoshop', 'Stratégie digitale', 'Création de contenu']
    }
  ];
  error: string | null = null;

  ngOnInit(): void {
    // Données déjà disponibles, rien à charger
  }

  getProjectColor(index: number): string {
    const colors = ['#60a5fa', '#1d4ed8', '#0b1120', '#1e293b', '#2563eb'];
    return colors[index % colors.length];
  }
}
