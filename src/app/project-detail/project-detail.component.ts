import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  currentProject: FirebaseObjectObservable<any>;
  pledges: FirebaseListObservable<any[]>;

  constructor( private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
        this.projectId = urlParameters['id'];
    });
    this.currentProject = this.projectService.getProjectById(this.projectId);
    this.pledges = this.projectService.getPledges();
    this.currentProject.subscribe(project => {
      console.log(project);
      var thisPledge = project.pledges;
      thisPledge.forEach(singlePledge => {
          console.log(singlePledge);
      });
    });
  }

}
