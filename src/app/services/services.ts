import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  icon: string;
  iconClass: string;
  title: string;
  meta: string;
  description: string;
  tags: string[];
  color: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services: Service[] = [
    {
      id: 1,
      icon: '</>',
      iconClass: 'services__icon--web',
      title: 'Développement Web',
      meta: 'Sites et applications responsives',
      description: 'Création de sites et d\'applications web modernes avec une base solide en Java, C#, Python et les frameworks front/back adaptés. Code propre, interfaces responsives et accessibles.',
      tags: ['Angular', 'HTML · CSS · TypeScript', 'Django', 'Java', 'C#'],
      color: '#1d4ed8'
    },
    {
      id: 2,
      icon: '📱',
      iconClass: 'services__icon--mobile',
      title: 'Applications mobiles',
      meta: 'Expériences natives & hybrides',
      description: 'Développement d\'applications mobiles avec Flutter et React Native, centrées sur la simplicité d\'usage et la performance.',
      tags: ['Flutter · Dart', 'React Native', 'UI mobile'],
      color: '#0f766e'
    },
    {
      id: 3,
      icon: 'API',
      iconClass: 'services__icon--api',
      title: 'API REST & intégration',
      meta: 'Backends connectés à vos interfaces',
      description: 'Conception d\'API REST pour connecter frontends Angular à des backends Node, Django ou autres services, avec une structure claire et documentée.',
      tags: ['API REST', 'Node.js', 'Django', 'SQL Server', 'Odoo'],
      color: '#7c3aed'
    },
    {
      id: 4,
      icon: '✏️',
      iconClass: 'services__icon--design',
      title: 'Design & identité visuelle',
      meta: 'Interfaces qui racontent une histoire',
      description: 'Création de maquettes et visuels avec Figma et Photoshop : identités graphiques, mini-branding pour projets, visuels pour le web et les réseaux sociaux.',
      tags: ['Figma', 'Photoshop', 'Content creation', 'UI design'],
      color: '#db2777'
    }
  ];

  ngOnInit(): void {}
}
