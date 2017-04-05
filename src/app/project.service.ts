import { Injectable } from '@angular/core';
import { Project, Pledge } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  pledges: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
      this.projects = angularFire.database.list('projects');
      this.pledges = angularFire.database.list('pledges');
   }

   getProjects() {
     return this.projects;
   }

   getPledges() {
     return this.pledges;
   }

   getProjectById(projectId: string) {
     return this.angularFire.database.object('projects/' + projectId);
   }

   addProject(newProject: Project) {
     this.projects.push(newProject);
   }

  //  getPledgeById(projectId: string) {
  //    var allPledge = this.pledges;
  //    var output: Pledge[] = [];
  //    for (let i = 0; i < allPledge.length; i++) {
  //       if (allPledge[i].project.id === projectId) {
  //         output.push(allPledge[i]);
  //       }
  //    }
  //    return output;
  //  }
}
