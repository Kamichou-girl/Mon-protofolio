import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  skills: Skill[] = [
    // Langages
    { name: 'Java', category: 'Langages', icon: '☕', color: '#f89820' },
    { name: 'Dart', category: 'Langages', icon: '🎯', color: '#00c4b3' },
    { name: 'C#', category: 'Langages', icon: '🔷', color: '#239120' },
    { name: 'Python', category: 'Langages', icon: '🐍', color: '#3776ab' },
    { name: 'TypeScript', category: 'Langages', icon: '📘', color: '#3178c6' },
    { name: 'JavaScript', category: 'Langages', icon: '🟨', color: '#f7df1e' },
    
    // Frameworks & Développement
    { name: 'Angular', category: 'Développement', icon: '🅰️', color: '#dd0031' },
    { name: 'Flutter', category: 'Développement', icon: '🦋', color: '#02569b' },
    { name: 'Django', category: 'Développement', icon: '🎸', color: '#092e20' },
    { name: 'React Native', category: 'Développement', icon: '⚛️', color: '#61dafb' },
    { name: 'HTML5', category: 'Développement', icon: '📄', color: '#e34f26' },
    { name: 'CSS3', category: 'Développement', icon: '🎨', color: '#1572b6' },
    
    // Outils & Écosystème
    { name: 'Odoo', category: 'Outils', icon: '🦉', color: '#875a7b' },
    { name: 'API REST', category: 'Outils', icon: '🔌', color: '#6db33f' },
    { name: 'SQL Server', category: 'Outils', icon: '🗄️', color: '#cc2927' },
    { name: 'GitHub', category: 'Outils', icon: '🐙', color: '#181717' },
    { name: 'Figma', category: 'Outils', icon: '🎨', color: '#f24e1e' },
    { name: 'Photoshop', category: 'Outils', icon: '🖼️', color: '#31a8ff' },
    { name: 'Git', category: 'Outils', icon: '📦', color: '#f05032' },
    { name: 'VS Code', category: 'Outils', icon: '💻', color: '#007acc' },
  ];

  ngOnInit(): void {}
}
