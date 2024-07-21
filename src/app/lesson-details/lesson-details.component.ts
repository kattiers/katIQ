import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../lessons.service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Lesson } from '../lesson';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {
  lessonService = inject(LessonsService);

  router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  route: ActivatedRoute = inject(ActivatedRoute);
  lessonId: number = 0;
  lessonSection = '';
  lessonLink: any = '';
  lessonDescription: any = '';
  lesson: Lesson | undefined;
  isLinkAvailable = true;
  lessonTitle: any = '';

  constructor() {
    this.lessonId = Number(decodeURIComponent(this.route.snapshot.params['id']));

    this.lesson = this.lessonService.getLessonById(this.lessonId);
    this.lessonTitle = this.lesson?.title;
    if (this.lesson) {
      if (this.lesson.link === '-') {
        this.isLinkAvailable = false;
      } else {
        this.lessonLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.lesson.link);
      }
      let lessonDescriptionWithoutLinks = this.lesson.description.replace(/@/g, '<br>');
      let lessonDescriptionWithLinksAndStrong = lessonDescriptionWithoutLinks.replace(/!(.*?)!/g, '<strong>$1</strong>');
      this.lessonDescription = this.sanitizer.bypassSecurityTrustHtml(lessonDescriptionWithLinksAndStrong.replace(/\*(.*?)\*/g, '<a href="$1" target="_blank" style="color: rgb(83, 156, 132);"> (Click to see additional training material) </a>'));
    }
  }

  mainPage() {
    this.router.navigate(['']);
  }
}
