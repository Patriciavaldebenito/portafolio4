import { Component, OnInit } from '@angular/core';
import { Project } from '../interface/project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[];
  constructor(public projectsService: ProjectsService) { 

    this.projects = this.projectsService.getProjects();
  }

  ngOnInit(): void {
  }

}
