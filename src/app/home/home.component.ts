import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  display = "Displaying All Projects";
  displayProjects: FirebaseListObservable<any[]>;
  filterCriteria: string = "all";
  currentRoute = this.router.url;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.displayProjects = this.projectService.getProjects();
    console.log(this.currentRoute);
  }

  projectDetail(projectId: string) {
    this.router.navigate(['project', projectId]);
  }

  onChange(selectedOption){
    this.filterCriteria = selectedOption;
    this.display = "Displaying All Project in: " + this.filterCriteria;
  }



}
