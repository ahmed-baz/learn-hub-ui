import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { RatingComponent } from './components/rating/rating.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    CourseListComponent,
    CourseCardComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
