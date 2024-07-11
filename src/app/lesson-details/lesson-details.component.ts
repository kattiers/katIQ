import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../lessons.service';
import { RouterModule, Router } from '@angular/router';
import { Lesson } from '../lesson';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {
  lessonService = inject(LessonsService);

  router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  route: ActivatedRoute = inject(ActivatedRoute);
  lessonTitle = '';
  lessonSection = '';
  lessonLink: any = '';
  lessonDescription = '';
  lesson: Lesson | undefined;

  constructor() {
    this.lessonTitle = String(this.route.snapshot.params['title']);

    this.lesson = this.lessonService.getLessonByTitle(String(this.lessonTitle));
    if (this.lesson) {
      this.lessonLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.lesson.link);
      this.lessonDescription = this.lesson.description;
    }
  }

  mainPage() {
    this.router.navigate(['']);
  }
}
