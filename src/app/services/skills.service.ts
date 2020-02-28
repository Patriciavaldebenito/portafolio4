import { Injectable } from '@angular/core';
import { Skill } from '../interface/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills:Skill[];
  
  constructor() { 

    let skill7:Skill={
      name:'jquery',
      srcImg:'../../assets/icons8-jquery-50.png',
      booleanImg:true
    }

    let skill1:Skill={
      name:'JavaScript',
      parameterIcon:'fab fa-js fa-10x',
      booleanIcon:true,
    }
    let skill2:Skill={
      name:'Angular',
      parameterIcon:'fab fa-angular fa-10x',
      booleanIcon:true
      
    }
    let skill3:Skill={
      name:'CSS',
      parameterIcon:'fab fa-css3-alt fa-10x',
      booleanIcon:true
    }
    let skill4:Skill={
      name:'Bootstrap',
      parameterIcon:'fab fa-bootstrap fa-10x',
      booleanIcon:true
    }
    let skill5:Skill={
      name:'NodeJs',
      parameterIcon:'fab fa-node fa-10x',
      booleanIcon:true
    }
    let skill6:Skill={
      name:'Material',
      parameterIcon:'fab fa-mdb fa-10x',
      booleanIcon:true
    }



    
    let skill8:Skill={
      name:'Github',
      parameterIcon:'fab fa-github-square fa-10x',
      booleanIcon:true 
    }

    let skill9:Skill={
      name:'Git',
      parameterIcon:'fab fa-git-square fa-10x',
      booleanIcon:true
    }
    /*
    let skill10:Skill={
      name:'otro',
      parameterIcon:'fab fa-js fa-10x',
      booleanIcon:true
      
    }*/

    this.skills = [skill1,skill2,skill3, skill4, skill5, skill6, skill8,skill9,skill7];
    //console.log(this.skills);
  }

  getSkills(){
    console.log("dentro del metodo, consulta de projects: ", this.skills);
    return this.skills;
  }

}
