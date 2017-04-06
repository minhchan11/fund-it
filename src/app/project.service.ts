import { Injectable } from '@angular/core';
import { Project, Pledge } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  pledges: FirebaseListObservable<any[]>;
  filteredItems:Array<any>=[]

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

   getPledgebyId(projectId: string) {
     this.filteredItems=[];
  var thisProject = this.angularFire.database.object('projects/' + projectId);
  thisProject.subscribe(snapshot => {
        var array = snapshot.pledges;
        array.forEach(item => {
          var pledge = this.angularFire.database.object('pledges/' + item);
          this.filteredItems.push(pledge);
          console.log(this.filteredItems);
        });
    })
  return this.filteredItems;
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
