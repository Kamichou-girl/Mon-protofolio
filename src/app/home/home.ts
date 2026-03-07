import { Component } from '@angular/core';
import { About } from '../about/about';
import { Services } from '../services/services';
import { Projects } from '../projects/projects';
import { ExperiencePage } from '../experience-page/experience-page';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About, Services, Projects, ExperiencePage, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
