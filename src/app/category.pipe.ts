import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from './project.service';

@Pipe({
  name: 'categoryPipe'
})

export class CategoryPipe implements PipeTransform {
  filterCriteria:string;
  constructor(private projectService:ProjectService, private angularFire: AngularFire){}

  transform(value: any, filterCriteria) {
  if( filterCriteria != "all"){
    var filteredProject = this.angularFire.database.list('projects', {
      query: {
     orderByChild: 'category',
     equalTo: filterCriteria
      }
    });
    return filteredProject;
  } else {
    return this.angularFire.database.list('projects')
  }
  }
}
