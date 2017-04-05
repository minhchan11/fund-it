import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }

  createProject(title: string, description: string, whyFundUs: string, aboutUs: string, fundingGoal: number, category: string, profilePic: string) {
    var newProject = new Project(title, description ,whyFundUs, aboutUs, category, fundingGoal, profilePic);
    this.projectService.addProject(newProject);
  }
}
