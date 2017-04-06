import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CategoryPipe} from './category.pipe';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ProjectDetailComponent,
    CategoryPipe,
    AdminComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
