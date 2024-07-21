import { Routes } from '@angular/router';
import { LessonShowingComponent } from './lesson-showing/lesson-showing.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';

export const routes: Routes = [
    {
        path: '',
        component: LessonShowingComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: LessonDetailsComponent,
        title: 'Details of the lesson'
    }
];
