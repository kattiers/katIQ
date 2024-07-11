import { EventEmitter, Injectable } from '@angular/core';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  protected lessons: Lesson[] = [
    {
      title: "Magnetic flux. Lenz's rule",
      section: "Electromagnetic induction",
      subject: "Physics",
      language: "rus",
      link: "https://www.youtube.com/embed/OW9NaY6Dy7w",
      description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    },
    {
      title: "Faraday's law",
      section: "Electromagnetic induction",
      subject: "Biology",
      language: "rus",
      link: "https://www.youtube.com/embed/N6t0CLFCugo",
      description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    },
    {
      title: "Faraday's law",
      section: "Electromagnetic induction",
      subject: "Physics",
      language: "rus",
      link: "https://www.youtube.com/embed/N6t0CLFCugo",
      description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    },

    // {
    //   title: "Magnetic field and its characteristics",
    //   section: "Magnetic field",
    //   link: "https://www.youtube.com/embed/-ngxcW7VMLY",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Magnetic induction vector module. Ampere's law",
    //   section: "Magnetic field",
    //   link: "https://www.youtube.com/embed/mgipYDDZeLg",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // }, 
    // {
    //   title: "Conditions for the existence of direct current. Electromotive force",
    //   section: "DC laws",
    //   link: "https://www.youtube.com/embed/68Nktnw2Egg",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Ohm's law. Conductor Resistance Calculation",
    //   section: "DC laws",
    //   link: "https://www.youtube.com/embed/PBI9RxyDpi8",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "The subject of thermodynamics. Internal body energy",
    //   section: "Basics of thermodynamics",
    //   link: "https://www.youtube.com/embed/9mmb6gjVwE",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Laws of geometric optics",
    //   section: "Geometric optics",
    //   link: "https://www.youtube.com/embed/LVziS9Fkrb4",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Oscillatory motion and its characteristics",
    //   section: "Mechanical vibrations",
    //   link: "https://www.youtube.com/embed/Kc2-znE9-wY",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
  ];

  constructor() { }

  getLessons(): Lesson[] {
    console.log(this.lessons);
    return this.lessons;
  }

  addLesson(lesson: Lesson) {
    this.lessons = [...this.lessons, lesson];
    console.log('Lesson added!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  editLesson(index: number, lesson: Lesson) {
    this.lessons[index] = lesson;
    console.log('Lesson edited!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  deleteLesson(index: number) {
    this.lessons.splice(index, 1);
    console.log('Lesson deleted!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  getLessonByTitle(title: string): Lesson | undefined {
    return this.lessons.find(lessons => lessons.title === title);
  }

  searchLessons(query: string): Lesson[] {
    return this.lessons.filter(lesson => lesson.title.toLowerCase().includes(query.toLowerCase()));
  }

  dataChanged = new EventEmitter<Lesson[]>();
}