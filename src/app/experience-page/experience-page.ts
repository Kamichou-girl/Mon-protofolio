import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'stage' | 'projet';
  description: string;
  skills: string[];
  color: string;
}

@Component({
  selector: 'app-experience-page',
  imports: [CommonModule],
  templateUrl: './experience-page.html',
  styleUrl: './experience-page.css',
})
export class ExperiencePage implements OnInit {
  experiences: Experience[] = [
    {
      id: 1,
      title: 'Stagiaire en marketing communication digitale internationale',
      company: 'AI University',
      location: 'Mumbai, Inde',
      period: '2024 - 3 mois',
      type: 'stage',
      description: 'Immersion dans un environnement international, gestion de communication digitale et découverte de la culture tech en Inde. Cette expérience a renforcé mon adaptabilité et mon aisance à travailler en contexte multiculturel.',
      skills: ['Communication', 'Marketing Digital', 'Culture Internationale', 'Adaptabilité'],
      color: '#60a5fa'
    },
    {
      id: 2,
      title: 'Application de gestion de cantine',
      company: 'Projet Académique',
      location: 'Abidjan, Côte d\'Ivoire',
      period: '2024 - 2 mois',
      type: 'projet',
      description: 'Conception et développement d\'une application mobile pour gérer les repas, menus et paiements d\'une cantine. Focus sur l\'expérience utilisateur et la fiabilité des données.',
      skills: ['React Native', 'JavaScript', 'UX Design', 'Base de Données'],
      color: '#a78bfa'
    },
    {
      id: 3,
      title: 'Projet E-association — ONG Crechendo Vie',
      company: 'Projet Humanitaire',
      location: 'Abidjan, Côte d\'Ivoire',
      period: '2023 - 4 mois',
      type: 'projet',
      description: 'Développement d\'une plateforme pour le suivi administratif, des bénéficiaires et du volet médical. Objectif : offrir un outil simple, fiable et utile aux acteurs de terrain.',
      skills: ['C#', 'SQL Server', 'API REST', 'Gestion de Données Sensibles'],
      color: '#f472b6'
    },
    {
      id: 4,
      title: 'Portfolio dynamique Angular',
      company: 'Projet Personnel',
      location: 'Abidjan, Côte d\'Ivoire',
      period: '2025 - 1 mois',
      type: 'projet',
      description: 'Création d\'un portfolio moderne et interactif avec Angular, TypeScript et animations CSS. Mise en place d\'une architecture modulaire et d\'expériences utilisateur engageantes.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'CSS Animations'],
      color: '#34d399'
    }
  ];

  ngOnInit(): void {}
}
