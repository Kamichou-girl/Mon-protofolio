import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Projects } from './projects/projects';
import { ExperiencePage } from './experience-page/experience-page';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'experience',
    component: ExperiencePage
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'not-found',
    component: Notfound
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
