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
      demo:'https://scl009-burger-queen.firebaseapp.com/',
      datePublicate:'26-julio-2019',
      srcGithub:'https://github.com/Patriciavaldebenito/SCL009-Burger-Queen/blob/develop/README.md',
      tecnology:'TypeScript - HTML - npm - GitHub',
      style:'CSS Bootstrap ',
      srcImg:'../../assets/img/burger-queen.png',
      framework:'Angular '
    }
    let proyect2:Project={
      name:'md-Link',
      demo:'https://www.npmjs.com/package/md-links-pvp',
      datePublicate:'datePublicate5',
      srcGithub:'https://github.com/Patriciavaldebenito/SCL009-md-links',
      tecnology:'Javascript - npm - nodejs - GitHub última versión - 1.1.0',
      srcImg:'../../assets/img/mdlink.png',
   

    }
    let proyect3:Project={
      name:'Plazinger',
      demo:'publicada en npm',
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
      name:'Red Social -Javascript, service express nodejs',
      datePublicate:'datePublicate2',
      srcGithub:'srcGithub2',
      tecnology:'tecnology2',
      style:'style2',
      srcImg:'../../assets/download2.jpeg',
      framework:'framework2'
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
