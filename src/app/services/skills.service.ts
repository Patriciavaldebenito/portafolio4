import { Injectable } from '@angular/core';
import { Skill } from '../interface/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills:Skill[];

  constructor() { 
    let skill1:Skill={
      name:'JavaScript',
      parameterIcon:'X',
      
    }
    let skill2:Skill={
      name:'Angular',
      parameterIcon:'X',
      
    }
    let skill3:Skill={
      name:'CSS',
      parameterIcon:'X',
      
    }
    let skill4:Skill={
      name:'Bootstrap',
      parameterIcon:'X',
      
    }
    let skill5:Skill={
      name:'NodeJs',
      parameterIcon:'X',
      
    }
    let skill6:Skill={
      name:'Materialize',
      parameterIcon:'X',
      
    }
    let skill7:Skill={
      name:'jquery',
      parameterIcon:'X',
      
    }
    let skill8:Skill={
      name:'Github',
      parameterIcon:'X',
      
    }

    let skill9:Skill={
      name:'Git',
      parameterIcon:'X',
      
    }
    let skill10:Skill={
      name:'otro',
      parameterIcon:'X',
      
    }

    this.skills = [skill1,skill2,skill3, skill4, skill5, skill6, skill7, skill8, skill9, skill10];
    //console.log(this.skills);
  }

  getSkills(){
    console.log("dentro del metodo, consulta de projects: ", this.skills);
    return this.skills;
  }

}
