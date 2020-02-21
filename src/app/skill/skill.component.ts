import { Component, OnInit } from '@angular/core';
import { Skill } from '../interface/skill';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:Skill[];
  constructor(public skillsService: SkillsService) { 

    this.skills = this.skillsService.getSkills();
  }

  ngOnInit(): void {
  }

}
