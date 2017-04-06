import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService]
})
export class EditComponent implements OnInit {
  @Input() project;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  update(project){
    this.projectService.editProject(project);
    this.router.navigate(['project', project.$key]);
  }

  delete(project){
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(project);
    }
  }
}
