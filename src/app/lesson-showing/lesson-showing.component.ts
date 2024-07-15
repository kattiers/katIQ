import { Component, OnInit, inject, NgZone } from '@angular/core';
import { LessonsService } from '../lessons.service';
import { Lesson } from '../lesson';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { StaffCarouselComponent } from '../staff-carousel/staff-carousel.component';

@Component({
  selector: 'app-lesson-showing',
  standalone: true,
  imports: [RouterModule, NgForOf, CommonModule, ReactiveFormsModule, StaffCarouselComponent],
  templateUrl: './lesson-showing.component.html',
  styleUrls: ['./lesson-showing.component.css'],
})

export class LessonShowingComponent implements OnInit {
  groupedLessons: any[] = [];
  private router = inject(Router);
  private ngZone = inject(NgZone);
  lessonsService: LessonsService = inject(LessonsService);
  activeUserName: any;
  lessons: Lesson[] = [];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit(): void {
    this.loadLessons();
    this.searchForm.get('query')?.valueChanges.subscribe(query => {
      this.searchLessons(query);
    });

    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      this.activeUserName = user.name;
    }
    console.log(this.activeUserName);
  }

  // scrollToSection(section: string) {
  //   document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  // }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  loadLessons(): void {
    this.lessons = this.lessonsService.getLessons();
    this.groupLessonsBySubjectAndSection(this.lessons);
  }

  searchLessons(query: string): void {
    if (query.trim() === '') {
      this.loadLessons();
      return;
    }
    const filteredLessons = this.lessonsService.searchLessons(query);
    this.groupLessonsBySubjectAndSection(filteredLessons);
  }

  groupLessonsBySubjectAndSection(lessons: Lesson[]): void {
    const subjectMap: any = {};

    lessons.forEach(lesson => {
      if (!subjectMap[lesson.subject]) {
        subjectMap[lesson.subject] = {};
      }
      if (!subjectMap[lesson.subject][lesson.section]) {
        subjectMap[lesson.subject][lesson.section] = [];
      }
      subjectMap[lesson.subject][lesson.section].push(lesson);
    });

    this.groupedLessons = Object.keys(subjectMap).map(subject => ({
      subject,
      sections: Object.keys(subjectMap[subject]).map(section => ({
        section,
        lessons: subjectMap[subject][section]
      }))
    }));
  }

  onSearch(): void {
    const query = this.searchForm.get('query')?.value;
    this.searchLessons(query);
  }

  exit(): void {
    this.ngZone.run(() => {
      this.router.navigate(['/']);
    });
  }
}