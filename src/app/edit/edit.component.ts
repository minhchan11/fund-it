import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService]
})
export class EditComponent implements OnInit {
  @Input() project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  update(project){
    this.projectService.editProject(project);
  }
}
