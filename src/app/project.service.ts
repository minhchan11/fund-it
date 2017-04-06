import { Injectable } from '@angular/core';
import { Project, Pledge } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  pledges: FirebaseListObservable<any[]>;
  filterPledges:Array<any>=[]

  constructor(private angularFire: AngularFire) {
      this.projects = angularFire.database.list('projects');
      // this.projects = angularFire.database.list('projects', {
      //   query: {
      //  orderByChild: 'category',
      //  equalTo: 'Art'
      //   }
      // });
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
     this.filterPledges=[];
  var thisProject = this.angularFire.database.object('projects/' + projectId);
  thisProject.subscribe(snapshot => {
        var array = snapshot.pledges;
        array.forEach(item => {
          var pledge = this.angularFire.database.object('pledges/' + item);
          this.filterPledges.push(pledge);
          console.log(this.filterPledges);
        });
    })
  return this.filterPledges;
}

        editProject(project){
            var editedProject = this.getProjectById(project.$key);
            editedProject.update({title: project.title,
                                  description: project.description,
                                   whyFundUs: project.whyFundUs,
                                 category: project.category,
                                  fundingGoal: project.fundingGoal});

          }

}
