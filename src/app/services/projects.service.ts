import { Injectable } from '@angular/core';
import { Project } from '../interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects:Project[];
  constructor() {

    let proyect1:Project={
      name:'Burger Queen',
      datePublicate:'datePublicate1',
      srcGithub:'srcGithub1',
      tecnology:'tecnology1',
      style:'style1',
      srcImg:'../../assets/download1.png',
      framework:'framework1'
    }
    let proyect2:Project={
      name:'Red Social -Javascript, service express nodejs',
      datePublicate:'datePublicate2',
      srcGithub:'srcGithub2',
      tecnology:'tecnology2',
      style:'style2',
      srcImg:'../../assets/download2.jpeg',
      framework:'framework2'
    }
    let proyect3:Project={
      name:'Plazinger',
      datePublicate:'datePublicate3',
      srcGithub:'srcGithub3',
      tecnology:'tecnology3',
      style:'style3',
      srcImg:'../../assets/download3.jpeg',
      framework:'framework3'
    }
    let proyect4:Project={
      name:'To do',
      datePublicate:'datePublicate4',
      srcGithub:'srcGithub4',
      tecnology:'tecnology4',
      style:'style4',
      srcImg:'../../assets/download1.png',
      framework:'framework4'
    }
    let proyect5:Project={
      name:'md-Link',
      datePublicate:'datePublicate5',
      srcGithub:'srcGithub5',
      tecnology:'tecnology5',
      style:'style5',
      srcImg:'../../assets/download2.jpeg',
      framework:'framework5'
    }
    let proyect6:Project={
      name:'maqueta - Google',
      datePublicate:'datePublicate6',
      srcGithub:'srcGithub6',
      tecnology:'tecnology6',
      style:'style6',
      srcImg:'../../assets/download3.jpeg',
      framework:'framework6'
    }
    let proyect7:Project={
      name:'maqueta github o pinterest',
      datePublicate:'datePublicate7',
      srcGithub:'srcGithub7',
      tecnology:'tecnology7',
      style:'style7',
      srcImg:'../../assets/download1.png',
      framework:'framework7'
    }
    

    this.projects = [proyect1,proyect2,proyect3,proyect4,proyect5,proyect6,proyect7];


       
   }

   getProjects(){
     console.log("dentro del metodo, consulta de projects: ", this.projects);
     return this.projects;
   }
}
