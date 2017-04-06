import { Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  createProject(title: string, description: string, whyFundUs: string, fundingGoal: number, category: string) {
    var newProject = new Project(title, description ,whyFundUs, category, fundingGoal);
    this.projectService.addProject(newProject);
    this.router.navigate(['']);
  }
}
