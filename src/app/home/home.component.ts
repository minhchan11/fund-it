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
  display = "Displaying All Fund Its";
  displayProjects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.displayProjects = this.projectService.getProjects();
  }

  displayCategory(category: string) {
    this.display = "Displaying " + category + " Fund Its";
  }

  projectDetail(projectId: string) {
    this.router.navigate(['project', projectId]);
  }

}
