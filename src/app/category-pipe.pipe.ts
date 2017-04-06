import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from './project.service';

@Pipe({
  name: 'categoryPipe'
})

export class CategoryPipePipe implements PipeTransform {

  constructor(private projectService:ProjectService, private angularFire: AngularFire){}

  transform(value:any, args:string[]) {
   var artProject = this.angularFire.database.list('projects', {
     query: {
    orderByChild: 'category',
    equalTo: 'Technology'
     }
   });
   return artProject;
  }

}
